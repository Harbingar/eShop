import React from 'react';
import { Setting } from '../interface/settingInterface';

interface SettingProps {
  setting: Setting;
}

const Settings: React.FC<SettingProps> = ({ setting }) => {
  return (
    <div className="py-10 border-2 border-bestGreen rounded-md flex flex-col justify-center items-center">
      <a className="w-1/4 py-3" href="#">
        <img src={setting.imageUrl} alt="setting" />
      </a>
      <h1 className="text-bestWhite">{setting.title}</h1>
      <p className="text-bestGrey px-5">{setting.description}</p>
    </div>
  );
}

export default Settings;
