import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Phill } from '../../styles';
import { ProfileLink } from './styles';

const Me = ({user}) => {
    return(
        <Layout use={user}>
            <div>
                <SectionTitle>About Me</SectionTitle>
                <paragraph>{user.basic.summary}</paragraph>
            </div>
            <div>
                <SectionTitle>Skills</SectionTitle>
                <div>
                    {user.skills.map(skill => (
                        <Pill key={skill.name}> {skill.name} </Pill>
                    ))}
                </div>
            </div>
            <div>
                <SectionTitle>Profiles</SectionTitle>
                <ul>
                    {user.basics.profiles.map((profile, i) =>(
                        <ProfileLink key={profile.network}>
                            {i !== 0 && ' | '}
                            <a href={profile.url} target="_blank" rel="noreferrer noopener">
                                {profile.network}
                            </a>
                        </ProfileLink>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Me;