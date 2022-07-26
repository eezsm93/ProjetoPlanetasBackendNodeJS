import { Planet } from "../entities/Planet";

interface IPlanetRepository {
  create(planet: Planet): Promise<Planet>;
  listAll(): Promise<{ Planets: Planet[] }>;
  findById(planet_id: string): Promise<Planet>;
}

export { IPlanetRepository };
