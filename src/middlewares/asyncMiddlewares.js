import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.baseURL = 'http://146.59.87.87:8080/api/heroes';
export const BASE_IMG_URL = 'http://146.59.87.87:8080/avatars';
Notify.init({
  clickToClose: true,
});

export async function createHero(body) {
  try {
    return await axios({
      method: 'post',
      url: '/',
      data: body,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (error) {
    Notify.failure(error.response?.data?.error);
  }
}

export async function editHero(id, body) {
  try {
    return await axios({
      method: 'patch',
      url: `/${id}`,
      data: body,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (error) {
    Notify.failure(error.response?.data?.error);
  }
}

export async function deleteHero(id) {
  try {
    return await axios.delete(`/${id}`);
  } catch (error) {
    Notify.failure(error.response?.data?.error);
  }
}

export async function getAllHeroes(limit = 5, page = 1) {
  try {
    const {
      data: { data },
    } = await axios(`?limit=${limit}&page=${page}`);
    return data;
  } catch (error) {
    Notify.failure(error.response?.data?.error);
  }
}

export async function getHeroById(id) {
  try {
    const {
      data: { data: hero },
    } = await axios(`/${id}`);
    return hero;
  } catch (error) {
    Notify.failure(error.response?.data?.error);
  }
}

export async function deleteAvatar(url) {
  try {
    return await axios.patch(`${url}`);
  } catch (error) {
    Notify.failure(error.response?.data?.error);
  }
}
