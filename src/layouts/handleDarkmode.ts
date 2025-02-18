// 初始化暗黑模式
import { ref } from 'vue'

const initialIsDarkMode = () => {
    const currentTime = new Date(new Date().getTime())
    console.log(currentTime.getHours())
    if (currentTime.getHours() >= 18 || currentTime.getHours() < 6) {
        return true
    } else {
        return false
    }
}

initialIsDarkMode()

const isDarkMode = ref(initialIsDarkMode())

const mode = ref(isDarkMode.value ? 'dark' : 'light')

const handleDarkMode = () => {
    if (isDarkMode.value == false) {
        isDarkMode.value = true
        mode.value = 'dark'
    } else {
        isDarkMode.value = false
        mode.value = 'light'
    }
    console.log(mode.value)
}

export default { isDarkMode, mode, handleDarkMode }