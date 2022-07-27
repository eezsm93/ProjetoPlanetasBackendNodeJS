import { Planet } from "../entities/Planet";

interface IPlanetRepository {
  create(planet: Planet): Promise<Planet>;
  listAll(): Promise<{ Planets: Planet[] }>;
  findById(id: string): Promise<Planet>;
  activeOrDesactivePlanet(planet: Planet): Promise<void>;
}

export { IPlanetRepository };
