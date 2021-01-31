import React, { useCallback } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useParams,
  Link
} from "react-router-dom";

import Topic from './topic';


const newchatlist = [
  { id: "1", text: "Group Chat" },
  { id: "2", text: "Chat with Marry" },
  { id: "3", text: "Chat with John" },
];

export default function Chatlist() {
  const match = useRouteMatch();
  console.log(match);

  const renderTopic = useCallback((t) => {
    return (
      <div key={t.id}>
        <Link to={`${match.url}/${t.id}`}>{t.text}</Link>
      </div>
    );
  }, [match]);

  return (
    <>
    <h3>All chats</h3>
      {newchatlist.map(renderTopic)}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic chatlist={newchatlist} />
        </Route>
        <Route path={match.path}>
        </Route>
      </Switch>
    </>
  );
}