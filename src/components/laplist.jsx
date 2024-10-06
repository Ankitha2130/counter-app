'use client'

import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const LapList = ({ laps, formatTime, lapsEndRef }) => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
      <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Laps</h3>
      <ScrollArea className=" h-56 rounded-md border border-gray-200 dark:border-gray-700 p-4">
        {laps.map((lap, index) => (
          <div key={index} className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
            <span className="font-mono text-gray-600 dark:text-gray-400">Lap {index + 1}</span>
            <FontAwesomeIcon
              icon={faTrash}
              className="text-red-500 cursor-pointer"
              onClick={() => handleLapDelete(index)} // Call the delete handler on click
            />
            <span className="font-mono text-gray-800 dark:text-gray-200">{formatTime(lap)}</span>
          </div>
        ))}
        <div ref={lapsEndRef} />
      </ScrollArea>
    </div>
  )
}

export default LapList
