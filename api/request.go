package api

import (
	"bufio"
	"encoding/csv"
	"io"
	"log"
	"os"
	"strconv"

	pb "github.com/blong14/map_plat/proto"
	"google.golang.org/grpc"
)

var (
	grpcServer *grpc.Server
	points     []pb.Point
)

//MapServiceServer implements the gRPC map service Interface
type MapServiceServer struct {
}

//List all IPv6 locations
func (m MapServiceServer) List(req *pb.PointRequest, stream pb.MapService_ListServer) error {
	for point := range points {
		if err := stream.Send(&points[point]); err != nil {
			return err
		}
	}
	return nil
}

func init() {
	csvFile, err := os.Open("./data/out.csv")
	if err != nil {
		log.Fatal(err)
	}

	reader := csv.NewReader(bufio.NewReader(csvFile))
	for {
		line, err := reader.Read()
		if err == io.EOF {
			break
		} else if err != nil {
			log.Fatal(err)
		}
		count, _ := strconv.ParseInt(line[2], 10, 0)
		points = append(points, pb.Point{
			Latitude:  line[0],
			Longitude: line[1],
			Count:     count,
		})
	}
}
