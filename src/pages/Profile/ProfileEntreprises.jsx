import { Search } from "react-bootstrap-icons";
import "./ProfileEntreprises.scss";
import PortalList from "../../components/PortalList/PortalList";
import SortableList from "../../components/SortableList/SortableList";

// data.js
export const companies = [
  { id: 1, name: "Entreprise A", address: "123 Rue de l'Exemple, Paris" },
  { id: 2, name: "Entreprise B", address: "456 Rue de l'Exemple, Lyon" },
  { id: 3, name: "Entreprise C", address: "789 Rue de l'Exemple, Marseille" },
  // Ajoutez autant d'entreprises que vous le souhaitez
];

export const fetchCompanies = async (keyword) => {
  // Simule une recherche en filtrant les entreprises par le mot-clé
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(keyword.toLowerCase())
  );
  return filteredCompanies;
};

const ProfileEntreprises = () => {
  const title = "Liste des entreprises";
  const repoName = "entreprises";
  const query = fetchCompanies;
  const mapping = (company) => (
    <div>
      {company.name} - {company.address}
    </div>
  ); // Fonction pour mapper les données de l'entreprise
  const allowSearch = true;
  const emptyPlaceholder = "Aucune entreprise trouvée";
  const className = "custom-class";

  return (
    <div>
      <SortableList
        title={title}
        repoName={repoName}
        query={query}
        mapping={mapping}
        allowSearch={allowSearch}
        emptyPlaceholder={emptyPlaceholder}
        className={className}
      />
    </div>
  );
};

export default ProfileEntreprises;
