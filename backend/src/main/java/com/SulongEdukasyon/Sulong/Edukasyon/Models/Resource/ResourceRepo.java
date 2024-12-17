package com.SulongEdukasyon.Sulong.Edukasyon.Models.Resource;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourceRepo extends JpaRepository<ResourceEntity, Long> {
    ResourceEntity findByResourceTitle(String resourceTitle);
}
