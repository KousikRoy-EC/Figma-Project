
import { useEffect, useState } from "react"
import { BiMenuAltLeft } from "react-icons/bi"
import RideData from "./Card.js"


const Rides = ({ rides_data, user_code }) => {
    const temp = new Date("01-01-2022") // Took a random date cause, no data was found from todays's date
    const [stateValue, setStateValue] = useState("State")
    const [cityValue, setCityValue] = useState("City")
    const [tabIndex, setTabIndex] = useState(0)
    const temp_data = rides_data
    let state = []
    let city = []
    temp_data.forEach((r) => {
        const nearest = r["station_path"].reduce((prev, curr) => {
            return (Math.abs(curr - user_code) < Math.abs(prev - user_code) ? curr : prev)
        })
        state.push(r["state"])
        city.push(r["city"])
        Object.assign(r, { nearest_code: nearest })
    })
    temp_data.sort((a, b) => a["nearest_code"] - b["nearest_code"])
    const noState = [...new Set(state)]
    city = [...new Set(city)]
    const [nearestData, setNearestData] = useState(temp_data)
    const upcoming_data = nearestData.filter(ride => {
        const ride_date = new Date(ride["date"]).getTime()
        return ride_date > temp
    })

    const past_data = nearestData.filter(ride => {
        const ride_date = new Date(ride["date"]).getTime()
        return ride_date < temp
    })
    const filterStateData = (state) => {
        if (state !== "State" || state !== "None") {
            const filterdata = temp_data.filter(r => r["state"] == state)
            setNearestData(filterdata)
        }
        if (state === "State" || state === "None") {
            setNearestData(temp_data)
        }

    }
    const filtercityData = (city) => {
        if (city !== "City" || city !== "None") {
            const filterdata = temp_data.filter(r => r["city"] == city)
            setNearestData(filterdata)
        }
        if (city === "City" || state === "None") {
            setNearestData(temp_data)
        }
    }
    return (
        <div style={{ padding: "20px" }}>
            <Tabs onChange={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab><Text fontWeight={"semibold"}>Nearest rides</Text></Tab>
                    <Tab><Text fontWeight={"semibold"}>Upcoming rides ({upcoming_data.length})</Text></Tab>
                    <Tab><Text fontWeight={"semibold"}>Past rides ({past_data.length})</Text></Tab>

                    <Box style={{ marginLeft: "auto" }}>
                        <Menu style={{ marginLeft: "auto" }}>
                            <MenuButton variant="ghost" as={Button} leftIcon={<Icon as={BiMenuAltLeft} />}>
                                Filters
                            </MenuButton>
                            <MenuList padding={"10px"}>
                                <>
                                    <Select value={stateValue} onChange={(e) => {
                                        setStateValue(e.target.value)
                                        filterStateData(e.target.value)
                                    }}
                                        placeholder='State'>
                                        <option value="None">None</option>
                                        {temp_data.map(r => (
                                            <option key={r["state"]} value={r["state"]} >{r["state"]}</option>
                                        ))}
                                    </Select>
                                </>
                                <MenuDivider />
                                <>
                                    <Select value={cityValue} onChange={(e) => {
                                        setCityValue(e.target.value)
                                        filtercityData(e.target.value)
                                    }}
                                        placeholder='City'>
                                        <option value="None">None</option>
                                        {(stateValue == "State" || stateValue == "None") ? (
                                            <>
                                                {city.map(c => (
                                                    <option key={c} value={c}>{c}</option>
                                                ))}
                                            </>

                                        ) : (
                                            <>
                                                {temp_data.filter(ride => ride["state"] == stateValue)
                                                    .map(r => (<option key={r["city"]} value={r["city"]} >{r["city"]}</option>))
                                                }
                                            </>

                                        )}
                                    </Select>
                                </>
                            </MenuList>
                        </Menu>
                    </Box>

                </TabList>

                <TabPanels>
                    <TabPanel>
                        {nearestData.map(ride => (
                            <RideData key={ride["id"]} data={ride} user_code={user_code} />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        {upcoming_data.map(ride => (
                            <RideData key={ride["id"]} data={ride} user_code={user_code} />
                        ))}
                    </TabPanel>
                    <TabPanel>
                        {past_data.map(ride => (
                            <RideData key={ride["id"]} data={ride} user_code={user_code} />
                        ))}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>

    )
}

