import { useState } from "react";
import { useTranslation } from "react-i18next";

const i18nPreffix = 'pages.home.projects.';

interface EnterpriseNamePropTypes{
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

function EnterpriseName({name, isSelected, onClick}: EnterpriseNamePropTypes){
  return (
    <p 
      onClick={onClick}
      className={`px-3 py-1 border-b-2 md:border-b-0 md:border-l-2 transition duration-200 hover:cursor-pointer
        ${isSelected 
        ? 
        'border-primary bg-main-secondary' 
        : 
        'border-main-secondary hover:bg-main-secondary'}
      `}
    >
      <code>{name}</code>
    </p>
  )
}

interface EnterpriseInfoPropTypes {
  enterprise: EnterpriseData;
}

function EnterpriseInfo({enterprise}: EnterpriseInfoPropTypes){
  const { t } = useTranslation();
  return (
    <div>
      <p className="text-2xl">
        {enterprise.role} <span className="text-primary">
          @ <a target="_blank" href={enterprise.landingUrl}>
            {enterprise.shortName}
          </a>
        </span>
      </p>
      <p className="text-lg">{enterprise.dateInterval}</p>
      <ul className="ml-5 mt-5 text-lg">
        {
          enterprise.tasks.map((task) => (
            <li className="mt-5 text-justify">{t(task)}</li>
          ))
        }
      </ul>
    </div>
  )
}

interface EnterpriseData {
  name: string;
  shortName: string;
  role: string;
  landingUrl: string;
  dateInterval: string;
  tasks: Array<string>;
}


const enterprises: Array<EnterpriseData> = [
  {
    name: 'Napptilus Tech Labs',
    shortName: 'Napptilus',
    role: 'Mid Engineer',
    landingUrl: 'https://napptilus.com/',
    dateInterval: 'oct, 2022 - presente',
    tasks: [
      i18nPreffix + 'napptilus-task-1',
      i18nPreffix + 'napptilus-task-2',
    ]
  },
  {
    name: 'Luna Geospatial',
    shortName: 'LunaGeo',
    landingUrl: 'https://lunageo.com/',
    role: 'Developer',
    dateInterval: 'nov, 2020 - feb, 2022',
    tasks: [
      i18nPreffix + 'lunageo-task-1',
      i18nPreffix + 'lunageo-task-2',
    ]
  }
]




function Projects() {
  const { t } = useTranslation();
  const [enterpriseSelected, setEnterpriseSelected] = useState<EnterpriseData>(enterprises[0]);
  return (
    <div id="projects" className="bg-main py-[20vh] ml-[10vw] lg:ml-[30vw] mr-[10vw]">
      <div className="grid grid-cols-4">
        <div className="flex col-span-3">
          <h2 className="text-4xl mb-8">
            {t(i18nPreffix + 'intro')}
          </h2>
          <div className="bg-main-secondary h-[1px] ml-5 mr-5 mt-6 grow"></div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-7">
        {/* Sidebar */}
        <div className="md:col-span-2 flex md:block">
          {
            enterprises.map(e => (
              <EnterpriseName 
                key={e.name} 
                name={e.name} 
                isSelected={enterpriseSelected.name === e.name} 
                onClick={() => setEnterpriseSelected(e)} 
              />
            ))
          }
        </div>
        {/* Enterprise Info */}
        <div className="md:col-span-4 md:ml-10 mt-8 md:mt-0">
          <EnterpriseInfo enterprise={enterpriseSelected} />
        </div>
      </div>
    </div>
  )
}

export default Projects;