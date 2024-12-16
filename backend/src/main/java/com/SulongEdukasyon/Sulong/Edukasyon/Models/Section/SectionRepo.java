package com.SulongEdukasyon.Sulong.Edukasyon.Models.Section;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SectionRepo extends JpaRepository<SectionEntity, Long> {
    SectionEntity findBySectionName(String sectionName);  
}
