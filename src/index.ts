import { MarketFeeds } from './lib/trueData'
import chatter from './lib/trueData/chatter'

const marketFeeds = new MarketFeeds("FYERS1888", "70goUByG", ["BANKNIFTY23062244800PE", "BANKNIFTY23062243600CE", "BANKNIFTY23062240900PE"], "live")
marketFeeds.connect()

chatter.on('tick', (data: any) => {
    console.log(data)
})
