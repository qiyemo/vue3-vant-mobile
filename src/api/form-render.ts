/*
 * @Author: qiye
 * @LastEditors: qiye
 * @description: page description
 * @Date: 2024-01-26 10:54:49
 * @LastEditTime: 2024-02-22 14:56:11
 */
import request from '@/utils/request'

// export async function queryProse(): Promise<any> {
//   return request('/project/prose')
// }

export const api ={
  /** 加载模板数据 */
  loadFormJson: async (params: any, config: any) => request.post('/server/application/page/detail',params, config)
}

