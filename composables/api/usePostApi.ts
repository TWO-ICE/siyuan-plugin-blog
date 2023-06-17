/*
 * Copyright (c) 2023, Terwer . All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Terwer designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Terwer in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Terwer, Shenzhen, Guangdong, China, youweics@163.com
 * or visit www.terwer.space if you need additional information or have any
 * questions.
 */

import { createAppLogger } from "~/common/appLogger"
import { SiYuanApiAdaptor, SiyuanConfig } from "zhi-siyuan-api"

/**
 * 文档相关
 */
export const usePostApi = () => {
  const logger = createAppLogger("use-post")
  const env = useRuntimeConfig()

  const getPost = async (id: string) => {
    logger.info("Loading post from remote api...")

    // logger.info("env=>", env)
    // logger.info("defaultType=>", env.public.defaultType)
    // logger.info("siyuanApiUrl=>", env.public.siyuanApiUrl)
    // logger.info("siyuanAuthToken=>", env.siyuanAuthToken)

    const siyuanConfig = new SiyuanConfig(env.public.siyuanApiUrl, env.siyuanAuthToken)
    const blogApi = new SiYuanApiAdaptor(siyuanConfig)
    const postid = id.replace(/\.html$/, "")
    return await blogApi.getPost(postid)
  }

  return { getPost }
}
