import { useState , useEffect } from 'react'

interface Tache {
  id: number
  texte: string
  fait: boolean
}

export default function Taches() {
  // États
  const [texte, setTexte] = useState<string>('')


  const [taches, setTaches] = useState<Tache[]>(() => {
    const sauvegarde = localStorage.getItem("taches");
    return sauvegarde ? JSON.parse(sauvegarde) : [];
  });

  useEffect(() => {
    localStorage.setItem("taches", JSON.stringify(taches));
    console.log("Sauvegardé:", taches);
  }, [taches]);

  // Ajouter une tâche
  function ajouterTache(e: React.FormEvent) {
    e.preventDefault()
    if (!texte.trim()) return

    const nouvelleTache: Tache = {
      id: Date.now(),
      texte: texte,
      fait: false
    }

    setTaches([...taches, nouvelleTache])
    setTexte('')
  }

  // marquer comme faite
  function toggleFait(id: number) {
    setTaches(
      taches.map(t =>
        t.id === id ? { ...t, fait: !t.fait } : t
      )
    )
  }

  // supprimer
  function supprimerTache(id: number) {
    setTaches(taches.filter(t => t.id !== id))
  }

  return (
    <div>
      <h1>Mes Tâches</h1>

      {/* Formulaire contrôlé */}
      <form onSubmit={ajouterTache}>
        <input
          type="text"
          value={texte}
          onChange={e => setTexte(e.target.value)}
          placeholder="Ajouter une nouvelle tâche..."
        />
        <button type="submit">Ajouter</button>
      </form>

      {/* Affichage de la liste avec actions */}
      <ul>
        {taches.map(tache => (
          <li key={tache.id}>
            <span

              style={{
                textDecoration: tache.fait ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {tache.texte}
            </span>
<button onClick={() => toggleFait(tache.id)}>
              fait
            </button>
            <button onClick={() => supprimerTache(tache.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
