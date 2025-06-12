import axios from 'axios';
import type { Item } from '../contexts/AppContext';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export async function getItens() {
  const res = await api.get<Item[]>('/itens');
  return res.data;
}

export async function postItem(item: Omit<Item, 'id'>) {
  const res = await api.post<Item>('/itens', item);
  return res.data;
}

export async function deleteItem(id: number) {
  return api.delete(`/itens/${id}`);
}