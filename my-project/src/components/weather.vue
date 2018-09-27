<template>
    <div class="container">
        当前天气~
        <div>{{ weather.location.path }}</div>
        <div>{{ weather.now.text }} - {{ weather.now.temperature }}摄氏度</div>
        <div>穿衣：{{ suggestion.dressing.brief }}</div>
    </div>
</template>

<script>

const apiKey = 'q7vpqarqbl8gcos7'

export default {
    data () {
        return {
            weather: {
                location: {

                },
                now: {},
                last_update: ''
            },
            suggestion: {
                dressing: {}
            }
        }
    },
    methods: {
        setWeather (data) {
            this.weather = data
        },
        setSuggestion (data) {
            this.suggestion = data
        }
    },
    mounted() {
        // 定位
        wx.getLocation({
            success: async (data) => {
                console.log('定位 - ', data)
                const { latitude, longitude } = data
                const myLocation = `${latitude}:${longitude}`

                // 请求天气
                try {
                    // 请求天气信息
                    const result = await this.$getRequest(
                        'https://api.seniverse.com/v3/weather/now.json?',
                        `key=${apiKey}&location=${myLocation}&language=zh-Hans&unit=c`
                    )
                    console.log('天气 - ', result)
                    const {
                        location,
                        now,
                        last_update
                    } = result.results[0]
                    this.setWeather({
                        location,
                        now,
                        last_update
                    })

                    // 请求生活指数信息
                    const info = await this.$getRequest(
                        'https://api.seniverse.com/v3/life/suggestion.json?',
                        `key=${apiKey}&location=${myLocation}&language=zh-Hans`
                    )
                    console.log('指数 - ', info)
                    const { suggestion } = info.results[0]
                    this.setSuggestion(suggestion)
                } catch (error) {
                    console.log(error)
                }
            }
        })
    },
}
</script>

<style scoped>

</style>

