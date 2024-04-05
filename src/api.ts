import axios from "axios";

export const getAllCharacter = async (page?: number) => {
  const characterList = await axios.get(`${process.env.REACT_APP_BASEURL}/character/?page=${page}`);
  return characterList.data;
};

export const getOneCharacter = async (id: number) => {
  const characterData = await axios.get(`${process.env.REACT_APP_BASEURL}/character/${id}`);
  return characterData.data;
};
