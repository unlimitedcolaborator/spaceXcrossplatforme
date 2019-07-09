
    export interface OrbitParams {
        reference_system: string;
        regime: string;
        longitude?: any;
        semi_major_axis_km?: any;
        eccentricity?: any;
        periapsis_km: number;
        apoapsis_km: number;
        inclination_deg: number;
        period_min?: any;
        lifespan_years?: any;
        epoch?: any;
        mean_motion?: any;
        raan?: any;
        arg_of_pericenter?: any;
        mean_anomaly?: any;
    }

    export interface Payloads {
        payload_id: string;
        norad_id: any[];
        reused: boolean;
        customers: string[];
        nationality: string;
        manufacturer: string;
        payload_type: string;
        payload_mass_kg: number;
        payload_mass_lbs: number;
        orbit: string;
        orbit_params: OrbitParams;
    }
