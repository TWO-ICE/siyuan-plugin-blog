import { defineStore } from "pinia"
import AppConfig from "~/app.config"
import { createAppLogger } from "~/common/appLogger"
import { useCommonStorageAsync } from "~/stores/common/useCommonStorageAsync"

/**
 * 设置配置存储
 * https://pinia.vuejs.org/ssr/nuxt.html
 */
export const useSettingStore = defineStore("setting", () => {
  const logger = createAppLogger("use-setting-store")
  const storageKey = "/data/storage/petal/siyuan-blog/app.config.json"
  const { commonStore } = useCommonStorageAsync<typeof AppConfig>(storageKey)

  const getSetting = async (): Promise<typeof AppConfig> => {
    // const appConfig: typeof AppConfig = useAppConfig()
    // const storeSetting = commonStore.value
    // const setting = { ...appConfig, ...storeSetting }
    const setting = commonStore.value
    logger.info("get data from setting=>", setting)
    return setting
  }

  /**
   * 修改配置
   *
   * @param setting - 需要修改的配置
   */
  const updateSetting = async (setting: Partial<typeof AppConfig>) => {
    // updateAppConfig(setting)
    logger.info("update setting=>", setting)
    commonStore.value = setting
  }

  return { getSetting, updateSetting }
})
