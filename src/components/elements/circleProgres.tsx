  import React from 'react'
  import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

  const CircleProses = ({ proses, className, key, color }: { proses: number; className?: string; key?: number; color: string}) => {
    return (
      <CircularProgress value={proses} className={className} key={key} size={20} color={color}>
        <CircularProgressLabel fontSize={20}>{proses}%</CircularProgressLabel>
      </CircularProgress>
    );
  }

  export default CircleProses