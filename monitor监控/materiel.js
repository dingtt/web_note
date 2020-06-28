var config = {
    id:'', // 上报id
    uuid:'', // 设备id
    uid:'', // 用户id
    url:'', // 上报接口
    offline_url:'',// 离线上报接口
    isTest:0, // 是否测试项目
    autoReport:'', // 是否开启自动上报
    delay:0, // 是否延迟上报，auto为true时有效，0为即刻上报，10为收集10秒内的错误集中上报
    ignore:[], // 忽略的错误
    random:0 , // 是否抽样上报 [0~1] 1 全量
    // ratio:'', // 抽样比例
    repeat:'', // 重复上报 对于同一设备的同一错误  上报几次便不再上报

    offlineLog: false,
        offlineLogExp: 5,  // 离线日志过期时间 ， 默认5天
        offlineLogAuto: false,  //是否自动询问服务器需要自动上报
}