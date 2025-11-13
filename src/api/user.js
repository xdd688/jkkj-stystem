import ajax from "@/utils/request";
// 登录
export function loginFn(data) {
  return ajax({
    url: "/user/login",
    data,
    method: "post",
  });
}
// 获取系统更新记录表
export function getUndateListFn() {
  return ajax({
    url: "/index/get_update",
  });
}
