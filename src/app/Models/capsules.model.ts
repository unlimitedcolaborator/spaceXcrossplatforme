    export interface Mission {
        name: string;
        flight: number;
    }

    export interface Capsules {
        capsule_serial: string;
        capsule_id: string;
        status: string;
        original_launch?: Date;
        original_launch_unix?: number;
        missions: Mission[];
        landings: number;
        type: string;
        details: string;
        reuse_count: number;
    }