import config from './config'
import { MarketFeeds } from './lib/trueData'
import chatter from './lib/trueData/chatter'

const marketFeeds = new MarketFeeds(config.username, config.password, ["NIFTY BANK"], "live")
marketFeeds.connect()

chatter.on('tick', (data: any) => {
    console.log(data)
})
// chatter.on("touchline", (data: any) => {
//     console.log(data)
// })
