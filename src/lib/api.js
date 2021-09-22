import axios from 'axios'
import { getToken } from './auth'
import { baseUrl } from '../config'


function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// * STUDIO REQUESTS

export function getAllStudios() {
  return axios.get(`${baseUrl}/studios`)
}

export function getSingleStudio(studioId) {
  return axios.get(`${baseUrl}/studios/${studioId}`, headers())
}

export function createStudio(formData) {
  return axios.post(`${baseUrl}/studios`, formData, headers())
}

export function editStudio(studioId, formData) {
  return axios.put(`${baseUrl}/studios/${studioId}`, formData, headers())
}

export function deleteStudio(studioId) {
  return axios.delete(`${baseUrl}/studios/${studioId}`, headers())
}


// * COMMENT REQUESTS

export function createComment(studioId, formData) {
  return axios.post(`${baseUrl}/studios/${studioId}/comments`, formData, headers())
}

export function deleteComment(studioId, commentId) {
  return axios.delete(`${baseUrl}/studios/${studioId}/comments/${commentId}`, headers())
}

// * BOOKING REQUESTS

export function createBooking(studioId, formData) {
  return axios.post(`${baseUrl}/studios/${studioId}/bookings`, formData, headers())
}

export function deleteBooking(studioId, bookingId) {
  return axios.delete(`${baseUrl}/studios/${studioId}/bookings/${bookingId}`, headers())
}

// * USER REQUESTS

export function registerUser(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}

export function studioFavourited(studioId) {
  return axios.post(`${baseUrl}/studios/${studioId}/favourites`, headers(), headers())
}

export function profileUser() {
  return axios.get(`${baseUrl}/profile`, headers())
}

export function editUser(userId, formData) {
  return axios.put(`${baseUrl}/profile/${userId}`, formData, headers())
}