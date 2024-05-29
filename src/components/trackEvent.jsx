import { useEffect } from 'react';
import { useLocation } from '@reach/router';

const TrackEvent = ({ eventName, eventParams }) => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'track_event', // GTMで設定したカスタムイベント名
        eventName, // 'view_project'
        ...eventParams, // { page_title: post.title, project_id: post.id }
        page_path: location.pathname,
        page_location: window.location.href,
      });
    }
  }, [location.pathname, eventName, eventParams]);

  return null;
};

export default TrackEvent;