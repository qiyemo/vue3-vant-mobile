/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2024-01-25 10:52:21
 * @LastEditTime: 2024-01-26 10:54:27
 */
import request from '@/utils/request'

export async function queryProse(): Promise<any> {
  return request('/project/prose')
}