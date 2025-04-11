
import instance from "./apiService";
import { ISong } from "../types/Song";

export const getSongs = async (): Promise<ISong[]> => {
  return instance.get("songs")
}

export const getSongInfo = async (id: number): Promise<ISong> => {
  return instance.get("songs/" + id)
}

export const createSong = async (data: ISong) => {
  return instance.post("songs", data)
}

// Update

export const updateSong = async (id: number, data: ISong) => {
  return instance.put("songs/" + id, data)
}

// Delete
export const deleteSong = async (id: number) => {
  return instance.delete("songs" + `/${id}`)
}
