package api_test

import (
	"context"
	"testing"

	"github.com/blong14/map_plat/api"
	pb "github.com/blong14/map_plat/proto"
)

func TestAllPoints(t *testing.T) {
	service := api.GrpcService()
	req := &pb.PointRequest{}
	ctx := context.Background()

	points, err := service.AllPoints(ctx, req)

	if err != nil {
		t.Error("should not have an error")
	}

	if len(points.Points) == 0 {
		t.Error("should have points")
	}
}

func TestBoundedPoints(t *testing.T) {
	service := api.GrpcService()
	req := &pb.BoundedPointsRequest{
		LatMin:  "30",
		LatMax:  "60",
		LongMin: "-120",
		LongMax: "-90",
	}
	ctx := context.Background()

	points, err := service.BoundedPoints(ctx, req)

	if err != nil {
		t.Error("should not have an error")
	}

	if len(points.Points) == 0 {
		t.Error("should have points")
	}
}

func TestBoundedPointsBadInput(t *testing.T) {
	service := api.GrpcService()
	req := &pb.BoundedPointsRequest{
		LatMin:  "30",
		LatMax:  "60",
		LongMin: "-90", // min is larger than max
		LongMax: "-120",
	}
	ctx := context.Background()

	points, err := service.BoundedPoints(ctx, req)

	if err != nil {
		t.Error("should not have an error")
	}

	if len(points.Points) != 0 {
		t.Error("should not have points")
	}
}
