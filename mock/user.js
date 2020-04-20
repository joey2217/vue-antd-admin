import Mock from 'mockjs';

Mock.mock('/api/user/login', 'post', function(options) {
  return Mock.mock({
    name: Mock.Random.cname(),
    token: Mock.Random.guid(),
    message: '登录成功!'
  });
});

Mock.mock('/api/user/user-info', 'post', function(options) {
  return Mock.mock({
    name: Mock.Random.cname(),
    token: Mock.Random.guid(),
    message: '获取用户信息成功!'
  });
});

Mock.mock('/api/user/logout', 'post', function(options) {
  return Mock.mock({
    message: '退出成功!',
    date: Mock.Random.now(),
  });
});
