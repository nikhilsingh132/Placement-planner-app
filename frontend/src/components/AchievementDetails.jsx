import React, { useContext, useState } from 'react'
import { achievementdetail } from '../scenes/ResumeMaker'
import AddAchievement from './AddAchievement'

const AchievementDetails = () => {
  const { allAchievementData, setallAchievementData } = useContext(achievementdetail);
  const newId = Math.random().toString(36).substring(2, 11);
  const [achieveComponent, setachieveComponent] = useState([{ id: newId }]);

  const addAchievement = () => {
    const newId = Math.random().toString(36).substring(2, 11);// Generate unique ID
    setachieveComponent([...achieveComponent, { id: newId }]);
  }
  const removeAchievement = (removeId) => {
    setallAchievementData(allAchievementData.filter(exp => exp.id !== removeId));
    setachieveComponent(achieveComponent.filter(exp => exp.id !== removeId));
  }
  return (
    <>
      <div className='text-[2rem] font-bold text-center text-[#072342]'>Achievement Details</div>

      {
        achieveComponent.map(exp => (
          <AddAchievement
            key={exp.id}
            id={exp.id}
            removeAchievement={removeAchievement}
            allAchievementData={allAchievementData}
            setallAchievementData={setallAchievementData} />
        ))
      }
      <button className='bg-[#115423] text-[white] h-[2.5rem] w-[8rem] rounded-lg overflow-hidden' onClick={addAchievement}>Add more+</button>
    </>
  )
}

export default AchievementDetails