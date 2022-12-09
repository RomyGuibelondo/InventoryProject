import React from 'react'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredinfo/FeaturedInfo'
import "./home.css"
import { UserData } from '../../DummyDataChart'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'

function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart AcTiveUser2022={UserData} title="User Analytics" grid datakey="name"/>
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home