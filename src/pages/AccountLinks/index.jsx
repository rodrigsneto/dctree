import LinkItem from '@/components/LinkItem';
import LinkList from '@/components/LinkList';

const links = [
  {
    label: "Quero aprender a programar"
  },
  {
    label: "Quero aprender data analystic"
  },
  {
    label: "Quero aprender marketin digital",
    title: "Curso intensivo",
    description: "Veja aqui quais os cursos intensivos estão com turmas abertas e garanta sua vaga."
  },
  {
    label: "Clique e se inscreva",
    title: "Digital Plus",
    description: "Evento exclusivo para alunos!"
  }
];

export default function AccountLinks() {
  return (
    
    <LinkList>
      { links.map((item, index) => <LinkItem key={index} {...item} />)}
    </LinkList>
  )
}