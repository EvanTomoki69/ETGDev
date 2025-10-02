import React, { useState } from "react";
import services from "../data/services.json";

type ProductSearchBarProps = {
  onSelect: (productId: number) => void;
};

export function ProductSearchBar({ onSelect }: ProductSearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof services>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const lowerQuery = query.trim().toLowerCase();
    const filtered = services.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.id.toString() === lowerQuery
    );
    setResults(filtered);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="d-flex mb-3" style={{ gap: "0.5rem" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre o ID"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
      {results.length > 0 && (
        <ul className="list-group">
          {results.map((item) => (
            <li
              key={item.id}
              className="list-group-item list-group-item-action"
              style={{ cursor: "pointer" }}
              onClick={() => onSelect(item.id)}
            >
              {item.name} (ID: {item.id})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}