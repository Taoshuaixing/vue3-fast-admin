import { MockMethod } from 'vite-plugin-mock'

const userList = [
  {
    username: 'admin',
    password: '123456',
    role: 'admin',
    introduction: '管理员',
    avatar: 'http://img61.ddimg.cn/upload_img/00890/new/avatar-1688026436.png',
    email: 'admin@qq.com',
    createTime: 1623318878699
  },
  {
    username: 'editor',
    password: '123456',
    role: 'editor',
    introduction: '搬砖码农',
    avatar: 'http://img61.ddimg.cn/upload_img/00890/new/avatar-1688026436.png',
    email: 'editor@qq.com',
    createTime: 1623328878699
  },
  {
    username: 'tsx',
    password: 'a41052619A',
    role: 'admin',
    introduction: '否定先生',
    avatar: 'http://img61.ddimg.cn/upload_img/00890/new/avatar-1688026436.png',
    email: 'tsx@qq.com',
    createTime: 1625213469913
  }
]

const roleList = [
  { name: 'admin', description: '管理员', level: 0 },
  { name: 'editor', description: '编辑人员', level: 1 }
]

const userMockList: MockMethod[] = [
  {
    url: '/api/login',
    method: 'post',
    timeout: 1000,
    statusCode: 200,
    response: ({ body }: any) => {
      let flag = -1
      userList.forEach((item, index) => {
        if (item.username === body.username && item.password === body.password) {
          flag = index
        }
      })
      if (~flag) {
        const data = {
          code: 20000,
          message: '登录成功',
          token: new Date().getTime().toString(32),
          ...userList[flag]
        }
        return data
      } else {
        return {
          code: 40000,
          message: '用户名或密码错误'
        }
      }
    }
  },
  {
    url: '/api/logout',
    method: 'get',
    response: ({ query }: any) => {
      return {
        code: 20000,
        message: 'success',
        data: query
      }
    }
  },
  {
    url: '/api/users',
    method: 'get',
    timeout: 500,
    response: () => {
      const list = userList
      return {
        code: 20000,
        message: 'success',
        list
      }
    }
  },
  {
    url: '/api/roles',
    method: 'get',
    response: () => {
      const list = roleList
      return {
        code: 20000,
        message: 'success',
        list
      }
    }
  }
]

export default userMockList
