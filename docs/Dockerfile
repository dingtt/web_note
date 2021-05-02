# 基础镜像
FROM hayd/ubuntu-deno:1.0.0
# 工作目录
WORKDIR /usr/src/app
USER deno

# COPY index.ts .
# RUN deno cache deps.ts
# ADD添加
ADD . note

# RUN deno install --unstable --allow-read --allow-write --allow-net --allow-run --name=pagic https://deno.land/x/pagic/mod.ts
RUN alias pagic='docker run -it --rm -v $PWD:/pagic xcatliu/pagic'
# 暴露端口
EXPOSE 2000  
CMD ["pagic", "build","--watch","--serve"]

   