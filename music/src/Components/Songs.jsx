import React, { useEffect, useState } from 'react';
import { getSongs } from '../../services/api';
import SongPlayer from './SongPlayer';

export default function Songs() {
  const [songs, setSongs] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getSongs();
      setSongs(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div>

    <SongPlayer  songs={songs} />
    </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Song name
            </th>
            <th scope="col" className="px-6 py-3">
              Artist
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              year
            </th>
            <th scope="col" className="px-6 py-3">
              Review
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                {song.songname}
              </td>
              <td className="px-6 py-4">{song.artist}</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{song.year}</td>
              <td className="px-6 py-4">{song.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
