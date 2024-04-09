import React from 'react'
import ProfileDetailsLayout from '@/layouts/ProfileDetailsLayout';


function Default({ children }) {
  return (
    <ProfileDetailsLayout >
      {children}
    </ProfileDetailsLayout>
  )
}

export default Default
export const defaultPage = (page) => <Default>{page}</Default>;
