import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { StatsContainer, Loading, ChartsContainer } from '../../components'

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext()
  
  useEffect(() => {
    showStats()
  }, [])

  if(isLoading){
    <Loading center/>
  }

  return (
    <h1>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </h1>
  )
}

export default Stats
