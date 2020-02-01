// package: transit_realtime
// file: proto/gtfs.proto

import * as jspb from "google-protobuf";

export class FeedMessage extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): FeedHeader;
  setHeader(value?: FeedHeader): void;

  clearEntityList(): void;
  getEntityList(): Array<FeedEntity>;
  setEntityList(value: Array<FeedEntity>): void;
  addEntity(value?: FeedEntity, index?: number): FeedEntity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMessage.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMessage): FeedMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMessage;
  static deserializeBinaryFromReader(message: FeedMessage, reader: jspb.BinaryReader): FeedMessage;
}

export namespace FeedMessage {
  export type AsObject = {
    header: FeedHeader.AsObject,
    entityList: Array<FeedEntity.AsObject>,
  }
}

export class FeedHeader extends jspb.Message {
  hasGtfsRealtimeVersion(): boolean;
  clearGtfsRealtimeVersion(): void;
  getGtfsRealtimeVersion(): string | undefined;
  setGtfsRealtimeVersion(value: string): void;

  hasIncrementality(): boolean;
  clearIncrementality(): void;
  getIncrementality(): FeedHeader.Incrementality | undefined;
  setIncrementality(value: FeedHeader.Incrementality): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): number | undefined;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedHeader.AsObject;
  static toObject(includeInstance: boolean, msg: FeedHeader): FeedHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedHeader;
  static deserializeBinaryFromReader(message: FeedHeader, reader: jspb.BinaryReader): FeedHeader;
}

export namespace FeedHeader {
  export type AsObject = {
    gtfsRealtimeVersion?: string,
    incrementality?: FeedHeader.Incrementality,
    timestamp?: number,
  }

  export enum Incrementality {
    FULL_DATASET = 0,
    DIFFERENTIAL = 1,
  }
}

export class FeedEntity extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasIsDeleted(): boolean;
  clearIsDeleted(): void;
  getIsDeleted(): boolean | undefined;
  setIsDeleted(value: boolean): void;

  hasTripUpdate(): boolean;
  clearTripUpdate(): void;
  getTripUpdate(): TripUpdate | undefined;
  setTripUpdate(value?: TripUpdate): void;

  hasVehicle(): boolean;
  clearVehicle(): void;
  getVehicle(): VehiclePosition | undefined;
  setVehicle(value?: VehiclePosition): void;

  hasAlert(): boolean;
  clearAlert(): void;
  getAlert(): Alert | undefined;
  setAlert(value?: Alert): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedEntity.AsObject;
  static toObject(includeInstance: boolean, msg: FeedEntity): FeedEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedEntity;
  static deserializeBinaryFromReader(message: FeedEntity, reader: jspb.BinaryReader): FeedEntity;
}

export namespace FeedEntity {
  export type AsObject = {
    id?: string,
    isDeleted?: boolean,
    tripUpdate?: TripUpdate.AsObject,
    vehicle?: VehiclePosition.AsObject,
    alert?: Alert.AsObject,
  }
}

export class TripUpdate extends jspb.Message {
  hasTrip(): boolean;
  clearTrip(): void;
  getTrip(): TripDescriptor;
  setTrip(value?: TripDescriptor): void;

  hasVehicle(): boolean;
  clearVehicle(): void;
  getVehicle(): VehicleDescriptor | undefined;
  setVehicle(value?: VehicleDescriptor): void;

  clearStopTimeUpdateList(): void;
  getStopTimeUpdateList(): Array<TripUpdate.StopTimeUpdate>;
  setStopTimeUpdateList(value: Array<TripUpdate.StopTimeUpdate>): void;
  addStopTimeUpdate(value?: TripUpdate.StopTimeUpdate, index?: number): TripUpdate.StopTimeUpdate;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): number | undefined;
  setTimestamp(value: number): void;

  hasDelay(): boolean;
  clearDelay(): void;
  getDelay(): number | undefined;
  setDelay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TripUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: TripUpdate): TripUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TripUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TripUpdate;
  static deserializeBinaryFromReader(message: TripUpdate, reader: jspb.BinaryReader): TripUpdate;
}

export namespace TripUpdate {
  export type AsObject = {
    trip: TripDescriptor.AsObject,
    vehicle?: VehicleDescriptor.AsObject,
    stopTimeUpdateList: Array<TripUpdate.StopTimeUpdate.AsObject>,
    timestamp?: number,
    delay?: number,
  }

  export class StopTimeEvent extends jspb.Message {
    hasDelay(): boolean;
    clearDelay(): void;
    getDelay(): number | undefined;
    setDelay(value: number): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): number | undefined;
    setTime(value: number): void;

    hasUncertainty(): boolean;
    clearUncertainty(): void;
    getUncertainty(): number | undefined;
    setUncertainty(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopTimeEvent.AsObject;
    static toObject(includeInstance: boolean, msg: StopTimeEvent): StopTimeEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopTimeEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopTimeEvent;
    static deserializeBinaryFromReader(message: StopTimeEvent, reader: jspb.BinaryReader): StopTimeEvent;
  }

  export namespace StopTimeEvent {
    export type AsObject = {
      delay?: number,
      time?: number,
      uncertainty?: number,
    }
  }

  export class StopTimeUpdate extends jspb.Message {
    hasStopSequence(): boolean;
    clearStopSequence(): void;
    getStopSequence(): number | undefined;
    setStopSequence(value: number): void;

    hasStopId(): boolean;
    clearStopId(): void;
    getStopId(): string | undefined;
    setStopId(value: string): void;

    hasArrival(): boolean;
    clearArrival(): void;
    getArrival(): TripUpdate.StopTimeEvent | undefined;
    setArrival(value?: TripUpdate.StopTimeEvent): void;

    hasDeparture(): boolean;
    clearDeparture(): void;
    getDeparture(): TripUpdate.StopTimeEvent | undefined;
    setDeparture(value?: TripUpdate.StopTimeEvent): void;

    hasScheduleRelationship(): boolean;
    clearScheduleRelationship(): void;
    getScheduleRelationship(): TripUpdate.StopTimeUpdate.ScheduleRelationship | undefined;
    setScheduleRelationship(value: TripUpdate.StopTimeUpdate.ScheduleRelationship): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StopTimeUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: StopTimeUpdate): StopTimeUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StopTimeUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StopTimeUpdate;
    static deserializeBinaryFromReader(message: StopTimeUpdate, reader: jspb.BinaryReader): StopTimeUpdate;
  }

  export namespace StopTimeUpdate {
    export type AsObject = {
      stopSequence?: number,
      stopId?: string,
      arrival?: TripUpdate.StopTimeEvent.AsObject,
      departure?: TripUpdate.StopTimeEvent.AsObject,
      scheduleRelationship?: TripUpdate.StopTimeUpdate.ScheduleRelationship,
    }

    export enum ScheduleRelationship {
      SCHEDULED = 0,
      SKIPPED = 1,
      NO_DATA = 2,
    }
  }
}

export class VehiclePosition extends jspb.Message {
  hasTrip(): boolean;
  clearTrip(): void;
  getTrip(): TripDescriptor | undefined;
  setTrip(value?: TripDescriptor): void;

  hasVehicle(): boolean;
  clearVehicle(): void;
  getVehicle(): VehicleDescriptor | undefined;
  setVehicle(value?: VehicleDescriptor): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Position | undefined;
  setPosition(value?: Position): void;

  hasCurrentStopSequence(): boolean;
  clearCurrentStopSequence(): void;
  getCurrentStopSequence(): number | undefined;
  setCurrentStopSequence(value: number): void;

  hasStopId(): boolean;
  clearStopId(): void;
  getStopId(): string | undefined;
  setStopId(value: string): void;

  hasCurrentStatus(): boolean;
  clearCurrentStatus(): void;
  getCurrentStatus(): VehiclePosition.VehicleStopStatus | undefined;
  setCurrentStatus(value: VehiclePosition.VehicleStopStatus): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): number | undefined;
  setTimestamp(value: number): void;

  hasCongestionLevel(): boolean;
  clearCongestionLevel(): void;
  getCongestionLevel(): VehiclePosition.CongestionLevel | undefined;
  setCongestionLevel(value: VehiclePosition.CongestionLevel): void;

  hasOccupancyStatus(): boolean;
  clearOccupancyStatus(): void;
  getOccupancyStatus(): VehiclePosition.OccupancyStatus | undefined;
  setOccupancyStatus(value: VehiclePosition.OccupancyStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VehiclePosition.AsObject;
  static toObject(includeInstance: boolean, msg: VehiclePosition): VehiclePosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VehiclePosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VehiclePosition;
  static deserializeBinaryFromReader(message: VehiclePosition, reader: jspb.BinaryReader): VehiclePosition;
}

export namespace VehiclePosition {
  export type AsObject = {
    trip?: TripDescriptor.AsObject,
    vehicle?: VehicleDescriptor.AsObject,
    position?: Position.AsObject,
    currentStopSequence?: number,
    stopId?: string,
    currentStatus?: VehiclePosition.VehicleStopStatus,
    timestamp?: number,
    congestionLevel?: VehiclePosition.CongestionLevel,
    occupancyStatus?: VehiclePosition.OccupancyStatus,
  }

  export enum VehicleStopStatus {
    INCOMING_AT = 0,
    STOPPED_AT = 1,
    IN_TRANSIT_TO = 2,
  }

  export enum CongestionLevel {
    UNKNOWN_CONGESTION_LEVEL = 0,
    RUNNING_SMOOTHLY = 1,
    STOP_AND_GO = 2,
    CONGESTION = 3,
    SEVERE_CONGESTION = 4,
  }

  export enum OccupancyStatus {
    EMPTY = 0,
    MANY_SEATS_AVAILABLE = 1,
    FEW_SEATS_AVAILABLE = 2,
    STANDING_ROOM_ONLY = 3,
    CRUSHED_STANDING_ROOM_ONLY = 4,
    FULL = 5,
    NOT_ACCEPTING_PASSENGERS = 6,
  }
}

export class Alert extends jspb.Message {
  clearActivePeriodList(): void;
  getActivePeriodList(): Array<TimeRange>;
  setActivePeriodList(value: Array<TimeRange>): void;
  addActivePeriod(value?: TimeRange, index?: number): TimeRange;

  clearInformedEntityList(): void;
  getInformedEntityList(): Array<EntitySelector>;
  setInformedEntityList(value: Array<EntitySelector>): void;
  addInformedEntity(value?: EntitySelector, index?: number): EntitySelector;

  hasCause(): boolean;
  clearCause(): void;
  getCause(): Alert.Cause | undefined;
  setCause(value: Alert.Cause): void;

  hasEffect(): boolean;
  clearEffect(): void;
  getEffect(): Alert.Effect | undefined;
  setEffect(value: Alert.Effect): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): TranslatedString | undefined;
  setUrl(value?: TranslatedString): void;

  hasHeaderText(): boolean;
  clearHeaderText(): void;
  getHeaderText(): TranslatedString | undefined;
  setHeaderText(value?: TranslatedString): void;

  hasDescriptionText(): boolean;
  clearDescriptionText(): void;
  getDescriptionText(): TranslatedString | undefined;
  setDescriptionText(value?: TranslatedString): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Alert.AsObject;
  static toObject(includeInstance: boolean, msg: Alert): Alert.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Alert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Alert;
  static deserializeBinaryFromReader(message: Alert, reader: jspb.BinaryReader): Alert;
}

export namespace Alert {
  export type AsObject = {
    activePeriodList: Array<TimeRange.AsObject>,
    informedEntityList: Array<EntitySelector.AsObject>,
    cause?: Alert.Cause,
    effect?: Alert.Effect,
    url?: TranslatedString.AsObject,
    headerText?: TranslatedString.AsObject,
    descriptionText?: TranslatedString.AsObject,
  }

  export enum Cause {
    UNKNOWN_CAUSE = 1,
    OTHER_CAUSE = 2,
    TECHNICAL_PROBLEM = 3,
    STRIKE = 4,
    DEMONSTRATION = 5,
    ACCIDENT = 6,
    HOLIDAY = 7,
    WEATHER = 8,
    MAINTENANCE = 9,
    CONSTRUCTION = 10,
    POLICE_ACTIVITY = 11,
    MEDICAL_EMERGENCY = 12,
  }

  export enum Effect {
    NO_SERVICE = 1,
    REDUCED_SERVICE = 2,
    SIGNIFICANT_DELAYS = 3,
    DETOUR = 4,
    ADDITIONAL_SERVICE = 5,
    MODIFIED_SERVICE = 6,
    OTHER_EFFECT = 7,
    UNKNOWN_EFFECT = 8,
    STOP_MOVED = 9,
  }
}

export class TimeRange extends jspb.Message {
  hasStart(): boolean;
  clearStart(): void;
  getStart(): number | undefined;
  setStart(value: number): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): number | undefined;
  setEnd(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeRange.AsObject;
  static toObject(includeInstance: boolean, msg: TimeRange): TimeRange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeRange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeRange;
  static deserializeBinaryFromReader(message: TimeRange, reader: jspb.BinaryReader): TimeRange;
}

export namespace TimeRange {
  export type AsObject = {
    start?: number,
    end?: number,
  }
}

export class Position extends jspb.Message {
  hasLatitude(): boolean;
  clearLatitude(): void;
  getLatitude(): number | undefined;
  setLatitude(value: number): void;

  hasLongitude(): boolean;
  clearLongitude(): void;
  getLongitude(): number | undefined;
  setLongitude(value: number): void;

  hasBearing(): boolean;
  clearBearing(): void;
  getBearing(): number | undefined;
  setBearing(value: number): void;

  hasOdometer(): boolean;
  clearOdometer(): void;
  getOdometer(): number | undefined;
  setOdometer(value: number): void;

  hasSpeed(): boolean;
  clearSpeed(): void;
  getSpeed(): number | undefined;
  setSpeed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    latitude?: number,
    longitude?: number,
    bearing?: number,
    odometer?: number,
    speed?: number,
  }
}

export class TripDescriptor extends jspb.Message {
  hasTripId(): boolean;
  clearTripId(): void;
  getTripId(): string | undefined;
  setTripId(value: string): void;

  hasRouteId(): boolean;
  clearRouteId(): void;
  getRouteId(): string | undefined;
  setRouteId(value: string): void;

  hasDirectionId(): boolean;
  clearDirectionId(): void;
  getDirectionId(): number | undefined;
  setDirectionId(value: number): void;

  hasStartTime(): boolean;
  clearStartTime(): void;
  getStartTime(): string | undefined;
  setStartTime(value: string): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): string | undefined;
  setStartDate(value: string): void;

  hasScheduleRelationship(): boolean;
  clearScheduleRelationship(): void;
  getScheduleRelationship(): TripDescriptor.ScheduleRelationship | undefined;
  setScheduleRelationship(value: TripDescriptor.ScheduleRelationship): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TripDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: TripDescriptor): TripDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TripDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TripDescriptor;
  static deserializeBinaryFromReader(message: TripDescriptor, reader: jspb.BinaryReader): TripDescriptor;
}

export namespace TripDescriptor {
  export type AsObject = {
    tripId?: string,
    routeId?: string,
    directionId?: number,
    startTime?: string,
    startDate?: string,
    scheduleRelationship?: TripDescriptor.ScheduleRelationship,
  }

  export enum ScheduleRelationship {
    SCHEDULED = 0,
    ADDED = 1,
    UNSCHEDULED = 2,
    CANCELED = 3,
  }
}

export class VehicleDescriptor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): string | undefined;
  setLabel(value: string): void;

  hasLicensePlate(): boolean;
  clearLicensePlate(): void;
  getLicensePlate(): string | undefined;
  setLicensePlate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VehicleDescriptor.AsObject;
  static toObject(includeInstance: boolean, msg: VehicleDescriptor): VehicleDescriptor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VehicleDescriptor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VehicleDescriptor;
  static deserializeBinaryFromReader(message: VehicleDescriptor, reader: jspb.BinaryReader): VehicleDescriptor;
}

export namespace VehicleDescriptor {
  export type AsObject = {
    id?: string,
    label?: string,
    licensePlate?: string,
  }
}

export class EntitySelector extends jspb.Message {
  hasAgencyId(): boolean;
  clearAgencyId(): void;
  getAgencyId(): string | undefined;
  setAgencyId(value: string): void;

  hasRouteId(): boolean;
  clearRouteId(): void;
  getRouteId(): string | undefined;
  setRouteId(value: string): void;

  hasRouteType(): boolean;
  clearRouteType(): void;
  getRouteType(): number | undefined;
  setRouteType(value: number): void;

  hasTrip(): boolean;
  clearTrip(): void;
  getTrip(): TripDescriptor | undefined;
  setTrip(value?: TripDescriptor): void;

  hasStopId(): boolean;
  clearStopId(): void;
  getStopId(): string | undefined;
  setStopId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntitySelector.AsObject;
  static toObject(includeInstance: boolean, msg: EntitySelector): EntitySelector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntitySelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntitySelector;
  static deserializeBinaryFromReader(message: EntitySelector, reader: jspb.BinaryReader): EntitySelector;
}

export namespace EntitySelector {
  export type AsObject = {
    agencyId?: string,
    routeId?: string,
    routeType?: number,
    trip?: TripDescriptor.AsObject,
    stopId?: string,
  }
}

export class TranslatedString extends jspb.Message {
  clearTranslationList(): void;
  getTranslationList(): Array<TranslatedString.Translation>;
  setTranslationList(value: Array<TranslatedString.Translation>): void;
  addTranslation(value?: TranslatedString.Translation, index?: number): TranslatedString.Translation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TranslatedString.AsObject;
  static toObject(includeInstance: boolean, msg: TranslatedString): TranslatedString.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TranslatedString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TranslatedString;
  static deserializeBinaryFromReader(message: TranslatedString, reader: jspb.BinaryReader): TranslatedString;
}

export namespace TranslatedString {
  export type AsObject = {
    translationList: Array<TranslatedString.Translation.AsObject>,
  }

  export class Translation extends jspb.Message {
    hasText(): boolean;
    clearText(): void;
    getText(): string | undefined;
    setText(value: string): void;

    hasLanguage(): boolean;
    clearLanguage(): void;
    getLanguage(): string | undefined;
    setLanguage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Translation.AsObject;
    static toObject(includeInstance: boolean, msg: Translation): Translation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Translation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Translation;
    static deserializeBinaryFromReader(message: Translation, reader: jspb.BinaryReader): Translation;
  }

  export namespace Translation {
    export type AsObject = {
      text?: string,
      language?: string,
    }
  }
}

