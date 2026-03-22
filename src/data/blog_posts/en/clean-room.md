---
slug: clean-room
draft: false
title: 'Clean Room: TejoOne Validation and First Tests'
category: Engineering
date: 2024-12-05T00:00:00.000Z
author: Espaço ao Cubo Team
authorRole: Integration and Testing
image: /images/blog/sala-limpa.jpg
tags:
  - clean room
  - integration
  - testing
  - ISO 7
  - phase D
excerpt: 'Phase D of the TejoOne project marks a decisive moment: we validated our ISO 7 clean room and conducted the first integration tests.'
---

# Clean Room: TejoOne Validation and First Tests

The arrival of Phase D of the TejoOne project marks a decisive moment: the satellite is finally moving from CDR (Critical Design Review) to the workbench, taking shape in three dimensions.

For this assembly to proceed with complete safety, special attention must be paid to the environment where components are handled. One of the main concerns is the presence of airborne particles, which can damage or compromise the satellite's performance during the mission. To avoid this risk, the entire integration process is carried out in a **clean room**.

## What is a Clean Room?

A clean room is a controlled environment where the concentration of airborne particles is kept within very reduced limits. These particles, very small in size and invisible to the human eye (smaller than 10 μm), can interfere with electronic equipment and, especially, with optical systems, potentially causing damage or affecting satellite performance.

### Clean Room Characteristics

To ensure this controlled environment, a clean room typically includes:

* **Active air filtration** through HEPA filters
* **Constant air renewal**
* **Differential pressure between rooms**, preventing particle entry from adjacent areas
* **Strict access rules**

These access rules include the prohibition of materials that release particles, sanitization of all equipment and tools with isopropyl alcohol, and mandatory use of gowns, caps, gloves, and shoe covers.

### ISO Classes for Clean Rooms

According to **ISO 14644-1** standard, clean rooms are divided into different classes, depending on the number and size of particles present per cubic meter of air. These classes range from ISO 9 to ISO 1, with ISO 9 corresponding to street environment and ISO 1 to the highest level of cleanliness.

For working with CubeSats, such as TejoOne, **ISO 7** is commonly used. At this level, we only need to worry about larger particles, above 0.5 μm (more precisely: particles above sizes 0.5, 1, and 5 μm).

## Clean Room Validation

Since the room was new, there was no prior knowledge of its cleaning capacity or the class it belonged to. Being this the case, it was necessary to perform its **validation (or qualification)** before it could be used for TejoOne integration.

This process ensures that the environment meets the requirements defined for the intended ISO class. The validation consisted of performing various tests, evaluating different combinations of filtration power and environmental conditions.

### Measurement Method

To measure the actual level of particles, counting equipment was used that draws a known volume of air, measured in liters per minute, and detects how many particles exist for each specified size. From these values, it is possible to calculate the concentration of particles per cubic meter and determine the corresponding ISO class.

### Test Results

The tests performed yielded the following results:

1. **With all systems off**: the room shows performance equivalent to **ISO 8**
2. **With 50% active filtration** and temperature control off: the room can maintain **ISO 7**, as long as there are no people inside

### Validation Conclusions

Based on these results, it was concluded that:

* During work periods with people present, filtration must operate between **75% and 100%**, depending on the number of people in the room
* Temperature control must be turned on whenever people are working or when there is a need to maintain a sensitive component at a stable temperature

This qualification process confirmed that **the room is ready to support the demands of satellite assembly and integration**.

## First Operational Test

With the clean room validated and approved for use in assembly and integration activities, the first operational test was conducted: the **initial inspection of the structure** provided by the Portuguese Space Agency, followed by disassembly and analysis of one of the components received for integration into TejoOne.

### Test Objectives

The objective of this test was twofold:

1. Verify the physical condition of the structure after transport and storage
2. Evaluate the mechanical and dimensional compatibility of the component with the interfaces planned in the satellite's structural model

### Results and Learnings

This first test demonstrated, in practice, that the clean room is suitable for real integration operations, allowing work with sensitive components while maintaining a controlled environment.

Additionally, the experience allowed us to:

* Identify the type of support material needed to optimize work in upcoming stages
* Understand the logistical needs involved in the process
* Evaluate technical and documentation requirements
* Improve test organization and planning

## Next Steps

Based on the conclusions drawn from the first test, the next steps involve implementing the improvements identified in the **Manufacturing, Assembly, Integration and Verification Plan (MAIV Plan)**, in order to optimize assembly procedures within the clean room.

### Testing Campaign

After the MAIV review, the **component testing campaign for each subsystem** will begin, with the objective of verifying their operation, compatibility, and performance in a controlled environment. These tests will validate the status of each element before mechanical integration into the main structure.

### Final Assembly

At a later stage, and after qualification of all subsystems, the **complete assembly of TejoOne** will be carried out, following the sequence defined for final integration. This process will mark the transition to a new stage of the project, bringing the satellite closer to its final configuration.

## Acknowledgments

We thank the **Institute of Astrophysics and Space Sciences** for providing the space where Espaço ao Cubo performed the clean room validation and will continue the work, conducting the necessary tests and TejoOne integration, allowing us to fulfill the dream of assembling our satellite.

***

*Published by Espaço ao Cubo Team - Integration and Testing*
