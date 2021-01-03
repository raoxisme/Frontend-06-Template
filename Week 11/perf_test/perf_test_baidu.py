# 用你熟悉的编程语言写一个 Web 性能压测工具
# 输入参数：URL，请求总次数，并发数。
# 输出参数：平均响应时间，95% 响应时间。
# 用这个测试工具以 10 并发、100 次请求压测 www.baidu.com。

# 执行步骤：
# 1. 安装： pip install -i https://pypi.tuna.tsinghua.edu.cn/simple locust
#     或者下载whl from https://www.lfd.uci.edu/~gohlke/pythonlibs/
#     windows前提安装VC++ build tool http://go.microsoft.com/fwlink/?LinkId=691126
# 2. 运行： locust -f ./perf_test_baidu.py
# 2.1       浏览器打开http://localhost:8089/。Web界面输入 User  = 10; HATCH_RATE = 100
# 2.2       执行并查看结果

import configparser
import os
import time
from locust import HttpUser, task, between

class QuickstartUser(HttpUser):
    wait_time = between(0.5, 1)
    
    @task
    def hello_world(self):
        self.client.get("/")


        # for item_id in range( self.repeat_cnt ):
            # self.client.get("/")

    def on_start(self):
        #读取配置
        
        # root_dir = os.path.dirname(os.path.abspath('.'))  # 获取当前文件所在目录的上一级目录，即项目所在目录E:\Crawler
        # configpath = os.path.join(root_dir, "config.ini")
        # cf = configparser.ConfigParser()
        # cf.read(configpath)  # 读取配置文件
        # self.repeat_cnt = cf.get("General", "RepeatTime")  # 获取[Mysql-Database]中host对应的值

        pass

