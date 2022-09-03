type videoId = string;

export interface Scene {
  startTime: number;
  endTime: number;
}

export interface AddSceneRequestData extends Scene {
  videoId: videoId;
}

export interface Video {
  videoId: videoId;
  scenes: Scene[];
}
