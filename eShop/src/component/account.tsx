import React from 'react';
import Settings from "./setting";
import Partners from "./partner";
import Hr from "./hr";
import { Setting } from '../interface/settingInterface';
import { Partner } from '../interface/partnerInterface';

const Account: React.FC = () => {
    const settings: Setting[] = [
        {
            title: 'Mon Profil',
            description: 'Gérez vos informations personnelles',
            imageUrl: './panier.png'
        },
        {
            title: 'Mon Profil',
            description: 'Gérez vos informations personnelles',
            imageUrl: './panier.png'
        },
        {
            title: 'Mon Profil',
            description: 'Gérez vos informations personnelles',
            imageUrl: './panier.png'
        },
        {
            title: 'Mon Profil',
            description: 'Gérez vos informations personnelles',
            imageUrl: './panier.png'
        },
        {
            title: 'Mon Profil',
            description: 'Gérez vos informations personnelles',
            imageUrl: './panier.png'
        },
        {
            title: 'Mon Profil',
            description: 'Gérez vos informations personnelles',
            imageUrl: './panier.png'
        },
    ]
    const partners: Partner[] = [
        {
            title: 'Partenaire A',
            texts: ['Service A1', 'Service A2', 'Service A3']
        },
        {
            title: 'Partenaire B',
            texts: ['Service B1', 'Service B2', 'Service B3']
        },
        {
            title: 'Partenaire C',
            texts: ['Service C1', 'Service C2', 'Service C3']
        },
        {
            title: 'Partenaire D',
            texts: ['Service D1', 'Service D2', 'Service D3']
        },
        {
            title: 'Partenaire E',
            texts: ['Service E1', 'Service E2', 'Service E3']
        },
        {
            title: 'Partenaire F',
            texts: ['Service F1', 'Service F2', 'Service F3']
        }
    ];
  
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-2 gap-4 mb-8">
                {settings.map((setting, index) => (
                    <Settings key={index} setting={setting} />
                ))}
            </div>
            <Hr/>
            <div className="grid grid-cols-3 gap-4">
                {partners.map((partner, index) => (
                    <Partners key={index} partner={partner} />
                ))}
            </div>
        </div>
    );
}

export default Account;