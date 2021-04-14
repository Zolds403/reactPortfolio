import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Projects</SectionTitle>
                <ul>
                    {user.projects.map((project, i) => (
                        <ProjectItem key={i}>
                            <ProjectTitle>{project.name}</ProjectTitle>
                            <p>{project.summary}</p>
                            <SkillContainer>
                                {[...project.language, ...project.lobraries].map((item, j) => (
                                    <Pill key={j}>{item}</Pill>
                                ))}
                            </SkillContainer>
                        </ProjectItem>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};