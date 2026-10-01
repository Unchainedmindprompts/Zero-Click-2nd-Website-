'use client';
import { useState } from 'react';

const stages = [
  { name: 'Understand', kicker: '01 / FIND THE FIT', title: 'Is this the right business?', description: 'A clear identity connects the service, the area it covers and the people behind it.', rows: [['Business', 'Local window-treatment specialist'], ['Service', 'In-home consultation'], ['Fit', 'Service area + project requirements']] },
  { name: 'Trust', kicker: '02 / CHECK THE EVIDENCE', title: 'What backs up the claims?', description: 'Credentials, reviews and real work point to evidence an assistant can check, rather than claims it must guess about.', rows: [['People', 'Named owner + experience'], ['Evidence', 'Work examples + source links'], ['Conditions', 'Published scope + limitations']] },
  { name: 'Request', kicker: '03 / TAKE THE NEXT STEP', title: 'What can I request for my customer?', description: 'When an action is connected, its rules explain the required details, the customer’s permission and the next step.', rows: [['Action', 'Request a consultation'], ['Requires', 'Contact + location + permission'], ['Boundary', 'Human confirms the appointment']] },
  { name: 'Confirm', kicker: '04 / CLOSE THE LOOP', title: 'What actually happened?', description: 'The response says whether a request was received, needs a correction, or requires a human. A submitted request never becomes a made-up booking.', rows: [['Result', 'Received, rejected or handoff'], ['Follow-up', 'Business confirms next steps'], ['Record', 'Clear status + duplicate protection']] },
];

export default function BusinessJourney() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return <div className="journey-demo">
    <div className="journey-caption"><span className="status-dot" /> HOW THE CONNECTION WORKS <span>ILLUSTRATION</span></div>
    <div className="customer-request"><span>Your customer</span><p>“Find someone who can help, check they’re a good fit, and get the next step started.”</p></div>
    <div className="journey-connector" aria-hidden="true"><span />↓<span /></div>
    <div className="journey-tabs" aria-label="Explore the customer assistant journey">
      {stages.map((item, index) => <button key={item.name} type="button" onClick={() => setActive(index)} aria-pressed={active === index} aria-controls="journey-detail"><span>0{index + 1}</span>{item.name}</button>)}
    </div>
    <div className="journey-detail" id="journey-detail" aria-live="polite" aria-atomic="true">
      <p className="journey-kicker">{stage.kicker}</p>
      <h2>{stage.title}</h2>
      <p className="journey-description">{stage.description}</p>
      <dl>{stage.rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
    </div>
    <p className="journey-note">A design example, not a live assistant or booking tool. Each business needs its own facts, connections and rules.</p>
  </div>;
}
