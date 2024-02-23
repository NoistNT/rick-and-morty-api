import { Injectable } from '@nestjs/common';
import { ServiceInfo } from './types';

@Injectable()
export class AppService {
  getServiceInfo(): ServiceInfo {
    return {
      info: 'Rick and Morty API',
      version: '1.0.0',
      endpoints: {
        characters: {
          list: '/character',
          by_id: '/character/:id',
          by_name: '/character/?name=:name',
          by_status: '/character/?status=:status',
          by_species: '/character/?species=:species',
          by_gender: '/character/?gender=:gender',
          by_type: '/character/?type=:type',
          by_page: '/character/?page=:page',
          multiple_query_params:
            '/character/?gender=female&status=alive&type=alien',
        },
      },
    };
  }
}
