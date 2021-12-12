import { Avatar, TableCell, TableRow, Tooltip } from '@material-ui/core'
import React from 'react'
import { PlayerProfile } from '../App'
import './Profile.css'
import dayjs from 'dayjs'

export const Profile = ({ profile }: { profile: PlayerProfile }) => {
  if (profile.vac || profile.overwatch) {
    console.log(profile)
  }

  return (
    <TableRow key={profile.steamId}>
      <TableCell align="left">
        <Avatar src={profile.avatar} className="avatar" variant="rounded"></Avatar>
      </TableCell>
      <TableCell align="left">
        <a href={profile.profileUrl} target="blank">
          {profile.userName}
        </a>
      </TableCell>
      <TableCell align="left">{dayjs(profile.encountered).format('DD.MM.YYYY HH:mm:ss')}</TableCell>
      <TableCell align="left">{profile.comment}</TableCell>
      <TableCell align="left">
        <a href={profile.matchUrl} target="blank">
          {profile.matchUrl}
        </a>
      </TableCell>
      <TableCell align="left">
        {profile.vac || profile.overwatch ? (
          <Tooltip
            title={
              Math.ceil((new Date().getTime() - new Date(profile.banDate).getTime()) / 1000 / 60 / 60 / 24) +
              ' days since last ban'
            }
          >
            <span className="ban">
              {(profile.vac ? 'VAC' : 'Overwatch') +
                ' (' +
                Math.ceil((new Date().getTime() - new Date(profile.banDate).getTime()) / 1000 / 60 / 60 / 24) +
                ')'}
            </span>
          </Tooltip>
        ) : (
          ''
        )}
      </TableCell>
    </TableRow>
  )
}
