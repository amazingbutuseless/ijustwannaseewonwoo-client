type videoId = string;

export interface Scene {
  id: string;
  startTime: number;
  endTime: number;
  thumbnailUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AddSceneRequestData extends Scene {}

export interface Video {
  videoId: videoId;
  scenes: Scene[];
}
