---
title: "Весь AI TAI скриптинг"
description: "Все API для скриптинга tai файлов в Rise And Fall Civilization at war"
keywords: "rise and fall, rise and fall civilization at war, патч, баланс, фикс, установка, гайд, скриптинг, ai"
---
# Состояния юнитов

| **Состояние** | **Описание** |
|----------------|--------------|
| AddResourceToStorage | Юнит добавляет собранные ресурсы в хранилище. |
| Advance | Юнит движется по заданному пути или к цели (часто используется для снарядов). |
| AirportOpen | Аэропорт или авианосец активен и готовит самолеты к запуску. |
| AnimalParentalVengance | Состояние мести у животных (вероятно, родитель защищает детеныша). |
| AnimalRetaliation | Состояние ответной атаки у животных. |
| AttackEnemyUnit | Юнит атакует вражеского юнита. |
| AttackLocation | Юнит атакует указанную точку на земле (а не конкретного юнита). |
| BoardTransport | Юнит садится в транспорт (например, самолет на авианосец). |
| BombingRunComplete | Бомбардировщик завершил заход на цель. |
| Brake | Самолет тормозит после посадки. |
| BumpExtraLoadableUnits | Транспорт "выталкивает" лишних юнитов, которым не хватило места. |
| CalamityPreCast | Юнит (пророк, жрец) готовится к использованию "Катаклизма" (Calamity). |
| CannotReachContainer | Юнит не может добраться до транспорта/контейнера. |
| CastCalamity | Юнит применяет способность "Катаклизм". |
| CastingCalamity | Процесс применения "Катаклизма". |
| ChangeTargetForSpecialEnemy | Смена цели на особого врага. |
| ChangeTargetForSpecialRepair | Смена цели для особого ремонта. |
| CheckBuildSiteValidity | Проверка, действительна ли точка строительства. |
| CheckBuildSiteVisibility | Проверка, видна ли точка строительства. |
| CheckForOpenPosition | Проверка наличия свободного места (вероятно, у ресурса). |
| CheckOwner | Проверка владельца (здания, юнита). |
| CheckPackUnpackLocation | Проверка точки для сбора/разбора (например, осадного орудия). |
| CheckPreviousResource | Проверка предыдущего источника ресурсов. |
| CheckRange | Юнит проверяет дистанцию до цели. |
| CheckRangeWhileMoving | Юнит проверяет дистанцию до цели во время движения. |
| CheckRepairSiteAccessibility | Проверка доступности точки ремонта. |
| CheckResourceAccessibility | Проверка доступности ресурса. |
| CheckResourceCapacity | Проверка, заполнен ли юнит ресурсами. |
| CheckStorageAccessibility | Проверка доступности хранилища. |
| Circle | Юнит (обычно самолет) кружит в ожидании. |
| CircleAirtrafficController | Самолет кружит в ожидании диспетчера (для посадки). |
| Closed | Ворота закрыты. |
| Closing | Ворота закрываются. |
| ContinueToBrake | Самолет продолжает торможение. |
| ContinueToDescend | Самолет продолжает снижение. |
| ContinueToFly | Самолет продолжает полет. |
| ContinueToTaxi | Самолет продолжает руление по земле. |
| ContinueToWaitForLandingClearance | Самолет продолжает ждать разрешения на посадку. |
| ConvertToLocationGoal | Смена цели (Goal) на "движение к точке". |
| ConvertEnemyUnit | Юнит (жрец) конвертирует вражеского юнита. |
| Cower | Юнит (гражданский) съежился от страха. |
| DeathDueToDetection | Смерть из-за обнаружения (для сапперов, мин). |
| Descend | Самолет снижается для посадки. |
| Disappear | Юнит (гражданский) исчезает (заходит в здание). |
| DropBomb | Бомбардировщик сбрасывает бомбу. |
| DropoffResourcesAfterConstruction | Юнит сдает ресурсы после завершения строительства. |
| Dying | Юнит умирает (анимация смерти). |
| EndTraining | Юнит (тренер) завершает тренировку. |
| FaceEnemyUnit | Юнит поворачивается лицом к врагу. |
| FaceLocation | Юнит поворачивается лицом к указанной точке. |
| FindFarm | Юнит (крестьянин) ищет ферму. |
| FindNewResource | Юнит ищет новый источник ресурсов. |
| FindNewStorage | Юнит ищет новое хранилище. |
| FindSafeLocation | Юнит (жрец) ищет безопасное место. |
| FindStorage | Юнит ищет хранилище. |
| FindUnexploredArea | Юнит ищет неисследованную область карты. |
| FleeDanger | Юнит спасается бегством от опасности. |
| Fly | Самолет находится в полете. |
| FormationAttackLocation | Формация атакует указанную точку. |
| FormationAttackUnit | Формация атакует вражеского юнита. |
| FormationCollisionFreeze | Формация "заморожена" из-за столкновения (коллизии). |
| FormationConvertUnit | Формация конвертирует вражеского юнита. |
| FormationInArmyMovement | Формация движется в составе армии. |
| FormationPrepareForAttack | Формация готовится к атаке. |
| GarrisonUpgrade | Улучшение гарнизона. |
| GatherResource | Юнит собирает ресурс. |
| GetContainerProgress | Юнит (пассажир) проверяет статус транспорта (контейнера). |
| GetNextAutoWaypoint | Юнит получает следующую автоматическую точку маршрута (для патрулирования). |
| GetNextMoveWaypoint | Юнит получает следующую точку на маршруте. |
| GroupFinalRepath | Группа юнитов выполняет финальное перестроение пути. |
| HasResourceGoal | Проверка, есть ли у юнита цель, связанная с ресурсом. |
| HealUnit | Юнит (медик, жрец) лечит другого юнита. |
| HitTarget | Снаряд попал в цель. |
| HoldingPattern | Самолет находится в "зоне ожидания" (кружит). |
| Idle | Юнит бездействует, ожидает команд. |
| InitialAttackState | Начальное состояние атаки (точка входа для атаки). |
| InsufficientResources | Состояние при нехватке ресурсов (для ремонта, строительства). |
| KnockDown | Юнит сбит с ног. |
| KnockDownRecover | Юнит восстанавливается после падения. |
| Land | Самолет приземляется. |
| LaunchNextAirplane | Аэропорт/авианосец запускает следующий самолет. |
| LoadBomb | Бомбардировщик загружает бомбу (перезаряжается). |
| LoadIntoContainer | Юнит (пассажир) загружается в транспорт. |
| LookForEnemies | Юнит ищет врагов (активный поиск). |
| LookForHealee | Юнит (медик) ищет цель для лечения. |
| LookForTrainee | Юнит (тренер) ищет цель для тренировки. |
| LostEnemyUnit | Юнит потерял врага (используется башнями). |
| MoveInRangeOfTarget | Юнит движется, чтобы оказаться в радиусе действия цели. |
| MoveOutOfMinimumRange | Юнит (артиллерия) отходит от цели, если она подошла слишком близко. |
| MoveToAttackGoal | Юнит движется к цели атаки. |
| MoveToRepairSite | Юнит движется к месту строительства/ремонта. |
| MoveToResource | Юнит движется к ресурсу. |
| MoveToStorage | Юнит движется к хранилищу. |
| MoveToValidMapLocation | Юнит движется в допустимую точку на карте (чтобы вернуться из-за пределов). |
| MoveToWaitingArea | Юнит движется в зону ожидания (у ресурса). |
| NotifyWaitingCitizen | Уведомить ожидающего крестьянина (вероятно, что место у ресурса освободилось). |
| Open | Ворота открыты. |
| Opening | Ворота открываются. |
| PackUnpackLocationPreCheck | Предварительная проверка точки сбора/разбора. |
| Panic | Юнит (гражданский) паникует. |
| PayForConversion | Юнит (жрец) "платит" за конверсию (вероятно, тратит ману). |
| PickIdleBehavior | Юнит (гражданский) выбирает случайное действие в режиме Idle. |
| PickPanicBehavior | Юнит (гражданский) выбирает случайное действие в режиме Panic. |
| PickedUpLoadableUnits | Транспорт подобрал загружаемых юнитов. |
| PlayFinalDeath | Проигрывание финальной анимации смерти (для многофазной смерти). |
| PlayPhasedDeath1 | Проигрывание фазы 1 анимации смерти. |
| PlayPhasedDeath2 | Проигрывание фазы 2 анимации смерти. |
| PlayPhasedDeath3 | Проигрывание фазы 3 анимации смерти. |
| PostCalamityComputerOwner | Состояние компьютера после "Катаклизма". |
| PostCalamityFlee | Юнит спасается бегством после "Катаклизма". |
| PrepareToCastCalamity | Подготовка к "Катаклизму" (для старых сохранений). |
| PrepareToMove | Юнит готовится к движению (прокладывает путь). |
| ReacquireAttackGoalWhenReloaded | Юнит заново захватывает цель после перезарядки. |
| ReacquireEnemyUnit | Юнит заново ищет/захватывает вражескую цель. |
| ReacquireGoal | Юнит пытается получить новую цель или восстановить старую. |
| ReacquireLoadContainer | Юнит заново ищет транспорт (контейнер) для погрузки. |
| RecalculateLanding | Самолет пересчитывает траекторию посадки. |
| RepairBuilding | Юнит ремонтирует/строит здание. |
| RepathAroundObstacle | Юнит перестраивает путь вокруг препятствия. |
| RequestLanding | Самолет запрашивает посадку. |
| ResourcesDepleting | Ресурс (рыба, животное) истощается. |
| ResourcesRotting | Ресурсы (у трупа) "гниют" (исчезают). |
| RetaliateAgainstAttacker | Юнит атакует того, кто его атаковал (ответный удар). |
| ReturnToInitialContactLocation | Юнит возвращается на место, где он изначально заметил врага. |
| RunFromAttacker | Юнит спасается бегством от атакующего. |
| ScenarioOffMap | Состояние для юнитов, ушедших за карту по сценарию. |
| SearchForSecondaryTarget | Юнит ищет второстепенную цель (после уничтожения основной). |
| SelectNewTarget | Юнит (снаряд) выбирает новую цель. |
| SendParatrooperPlaneOffMap | Отправить самолет с парашютистами за пределы карты. |
| ShouldIFollowEnemyUnit | Проверка, должен ли юнит преследовать врага. |
| ShouldIReturnToInitialContactLocation | Проверка, должен ли юнит вернуться на исходную позицию. |
| StartNextTrainingStep | Юнит (тренер) начинает следующий этап тренировки. |
| StartTraining | Юнит (тренер) начинает тренировку. |
| Takeoff | Самолет взлетает. |
| Talk | Юнит (гражданский) разговаривает. |
| TaskSmartCitizen | Назначить задачу "умному" крестьянину (авто-назначение). |
| Taxi | Самолет рулит по земле (к взлетной полосе или стоянке). |
| TrainNewUnit | Здание (Колизей) тренирует нового юнита. |
| TrainUnit | Юнит (тренер) тренирует другого юнита. |
| TrainingComplete | Тренировка завершена. |
| TrackEnemyUnit | Юнит (башня) отслеживает врага (поворачивается). |
| TurnAround | Юнит (гражданский) поворачивается. |
| TurnToFaceHealee | Юнит (медик) поворачивается к цели лечения. |
| TurnToFaceTrainee | Юнит (тренер) поворачивается к тренируемому. |
| TurnToUnitFacing | Юнит поворачивается в указанном направлении. |
| UnderAttack | Юнит находится под атакой. |
| UnitFading | Юнит "исчезает" (визуальный эффект). |
| UnitRotting | Юнит "гниет" (труп). |
| UnloadTransport | Транспорт выгружает юнитов. |
| WaitForAttackAnimationToFinish | Ожидание завершения анимации атаки (для башен-катапульт). |
| WaitForBuildSiteToClear | Юнит ожидает, пока место строительства освободится. |
| WaitForGarrisonCost | Ожидание, пока накопится стоимость для гарнизона. |
| WaitForLandingClearance | Самолет ожидает разрешения на посадку. |
| WaitForMobileMountMovement | Ожидание движения мобильной платформы (для всадников). |
| WaitForOpenPosition | Юнит ожидает свободного места (у ресурса). |
| WaitForPackingCompletion | Ожидание завершения "упаковки" (сбора осадного орудия). |
| WaitForPassengers | Транспорт ожидает пассажиров. |
| WaitForReload | Юнит ожидает перезарядки. |
| WaitForTraineeAnimationCompletion | Тренер ожидает завершения анимации у тренируемого. |
| WaitForTraineeTurnCompletion | Тренер ожидает завершения поворота тренируемого. |
| WaitForTrainerTurnCompletion | Тренируемый ожидает завершения поворота тренера. |
| WaitForTransport | Юнит (пассажир) ожидает транспорт. |
| WaitingForArmyCommand | Юнит (в формации) ожидает команды от армии. |
| WaitingForStateTransition | Юнит ожидает перехода в следующее состояние (часто для снарядов). |

# Триггер / Команды 

| Триггер / Команда | Краткое описание |
|--------------------|------------------|
| AbandonEnemy | Команда "бросить" текущую вражескую цель. |
| AirportDestroyed | Триггер: Аэропорт (база) уничтожен. |
| AirtrafficControllerMoved | Триггер: Диспетчер (точка посадки) переместился. |
| AirplaneAvailableToLaunch | Триггер: Доступен самолет для запуска. |
| AlwaysTrue | Всегда "истина". Используется для безусловного перехода в другое состояние. |
| AmIUnderAttack | Триггер: Атакуют ли меня? |
| AmmoExhausted | Триггер: Боезапас исчерпан. |
| ArrivedAtLocation | Триггер: Юнит (снаряд) прибыл в точку. |
| ArrivedAtMoveWaypoint | Триггер: Юнит прибыл в очередную точку маршрута. |
| AttackAnimationFinished | Триггер: Анимация атаки завершена. |
| AttackMoveEnabled | Триггер: Включен режим "Атака в движении" (Attack Move). |
| AttackerIsLegalConversionTarget | Триггер: Атакующий является допустимой целью для конверсии. |
| AttackerIsReachable | Триггер: Атакующий находится в пределах досягаемости. |
| AttackerIsRangedUnit | Триггер: Атакующий - дальнобойный юнит. |
| BetterRepairSiteBuildLocationFound | Триггер: Найдено лучшее место для ремонта/строительства. |
| BlockedByWall | Триггер: Путь заблокирован стеной. |
| BoardedTransport | Триггер: Юнит успешно сел в транспорт. |
| BombingLoadComplete | Триггер: Загрузка бомб (перезарядка) завершена. |
| BuildQueueEmpty | Триггер: Очередь строительства пуста. |
| BuildSiteClear | Триггер: Место строительства свободно. |
| BuildSiteValid | Триггер: Место строительства действительное/корректное. |
| BuildSiteVisible | Триггер: Место строительства находится в зоне видимости. |
| BuildingDestroyed | Триггер: Здание уничтожено. |
| BuildingInBuildQueue | Триггер: Здание находится в очереди на строительство. |
| BuildingIsDropoffForMyResource | Триггер: Это здание - точка сброса для моего ресурса. |
| BuildingNotPaidFor | Триггер: Строительство не оплачено. |
| BuildingRepaired | Триггер: Здание отремонтировано (или построено). |
| CalamityTargetStillValid | Триггер: Цель для "Катаклизма" все еще действительна. |
| CanDamageAttacker | Триггер: Могу ли я повредить атакующего? |
| CanFlee | Триггер: Могу ли я спасаться бегством? |
| CanISeeEnemy | Триггер: Вижу ли я врага? |
| CanIMove | Триггер: Могу ли я двигаться? (для транспорта) |
| CanIMoveFreely | Триггер: Могу ли я двигаться свободно (без препятствий)? |
| CanIPursuePastInitialContactLOS | Триггер: Могу ли я преследовать врага дальше точки первого контакта? |
| CanITargetEnemies | Триггер: Могу ли я выбирать врагов в качестве цели? |
| CanUseThisTileAsWaitingArea | Триггер: Могу ли я использовать этот тайл как зону ожидания? |
| CannotAffordRepair | Триггер: Недостаточно ресурсов для ремонта. |
| CastingAnimationFinished | Триггер: Анимация применения (каста) завершена. |
| CastingAnimationFrameReached | Триггер: Достигнут ключевой кадр анимации применения. |
| CeaseFire | Триггер: Получена команда "Прекратить огонь". |
| CheckRangeShouldFaceEnemyUnit | Триггер (оптимизация): Проверка дистанции должна сразу перейти к повороту. |
| ChooseRandomVolcanoTarget | Команда: Выбрать случайную цель для Вулкана. |
| CivilianNearby | Триггер: Рядом находится другой гражданский. |
| CitizenShouldFlee | Триггер: Крестьянин должен спасаться бегством. |
| CompletedUnitFacing | Триггер: Юнит завершил поворот в указанном направлении. |
| ComputerBuildingShouldPickEnemyTarget | Триггер: Здание (ИИ) должно выбрать вражескую цель. |
| ContainerHasLostGoal | Триггер: Транспорт (пассажира) потерял свою цель. |
| ContainerHasNoMoreWaypoints | Триггер: У транспорта (пассажира) не осталось точек маршрута. |
| ContainerInRange | Триггер: Транспорт находится в пределах досягаемости. |
| ContainerIsDead | Триггер: Транспорт (пассажира) уничтожен. |
| ContainerIsFull | Триггер: Транспорт полон. |
| ConvertGoalStillValid | Триггер: Цель для конверсии все еще действительна. |
| DetectorInRange | Триггер: Юнит-детектор (для мин) находится в радиусе. |
| DyingAnimationFinished | Триггер: Анимация смерти завершена. |
| EnemyInsideInitialContactLOS | Триггер: Враг находится в зоне видимости, где произошел первый контакт. |
| EnemyIsBuilding | Триггер: Враг является зданием. |
| EnemyUnitConverted | Триггер: Вражеский юнит был конвертирован. |
| EnemyUnitDestroyed | Триггер: Вражеский юнит уничтожен. |
| EnemyUnitHasNotMovedOneTile | Триггер: Враг не сдвинулся ни на один тайл. |
| EnemyUnitInsideFiringArch | Триггер: Враг находится в секторе обстрела. |
| EnemyUnitLeftLOS | Триггер: Враг покинул зону видимости (Line of Sight). |
| EnemyUnitMoved | Триггер: Вражеский юнит сдвинулся. |
| EnemyUnitNoLongerVisible | Триггер: Вражеский юнит больше не виден. |
| EnemyUnitReachable | Триггер: Вражеский юнит досягаем. |
| EnemyUnitSpotted | Триггер: Замечен вражеский юнит. |
| EnemyWithinMinimumRange | Триггер: Враг подошел слишком близко (в "мертвую зону" артиллерии). |
| ExtraLoadableUnitsBumped | Триггер: Лишние юниты были "вытолкнуты". |
| FacingEnemyUnit | Триггер: Юнит повернут лицом к врагу. |
| FacingHealee | Триггер: Юнит (медик) повернут лицом к цели лечения. |
| FacingTrainee | Триггер: Юнит (тренер) повернут лицом к тренируемому. |
| FarmNotFound | Триггер: Ферма не найдена. |
| FinishedReloading | Триггер: Перезарядка завершена. |
| FlightTimeAlarm | Триггер: Сработало "топливное" время (самолету пора на базу). |
| FlyOffMapAfterAttack | Триггер: Самолет должен улететь за карту после атаки. |
| ForageAnimationFinished | Триггер: Анимация сбора (еды) завершена. |
| FormationArmyMovementComplete | Триггер: Движение армии (формации) завершено. |
| FoundEnemy | Триггер: Враг найден (при активном поиске). |
| WaypointOnGround | Точка маршрута находится на земле. |
| WaypointOnWater | Точка маршрута находится на воде. |
| WaypointReached | Точка маршрута достигнута. |
| WaypointValid | Точка маршрута действительна. |
| WorkerIdle | Рабочий бездействует. |
| WorkerBusy | Рабочий занят. |
| WorkerDead | Рабочий уничтожен. |
| WorkerCreated | Рабочий создан. |
| WorkerDeliveredResources | Рабочий доставил ресурсы. |
| WorkerCarryingResource | Рабочий несёт ресурс. |
| WorkerNotCarryingResource | Рабочий не несёт ресурс. |
| WorkerResourceFull | Рабочий полностью загружен ресурсом. |
| WorkerResourceEmpty | Рабочий не несёт ресурсов. |
| WorkerFoundResource | Рабочий нашёл ресурс. |
| WorkerLostResource | Рабочий потерял ресурс. |
| WorkerAtResourceSite | Рабочий прибыл к месту добычи. |
| WorkerLeavingResourceSite | Рабочий покидает место добычи. |
| WorkerBuilding | Рабочий строит здание. |
| WorkerRepairing | Рабочий ремонтирует здание. |
| WorkerStopped | Рабочий прекратил работу. |
| WorkerShouldReturnResources | Рабочий должен отнести ресурсы в хранилище. |
| WorkerShouldFindNewResource | Рабочий должен найти новый источник ресурса. |
| WorkerShouldBuild | Рабочий должен построить здание. |
| WorkerShouldRepair | Рабочий должен отремонтировать здание. |
| WorkerShouldIdle | Рабочий должен бездействовать. |
| WorkerShouldFlee | Рабочий должен спасаться бегством. |
| WorkerFleeing | Рабочий спасается бегством. |
| WorkerReturned | Рабочий вернулся на базу. |
| WorkerKilled | Рабочий убит. |
| WorkerRescued | Рабочий спасён. |
| WorkerCaptured | Рабочий захвачен врагом. |
| WorkerTrapped | Рабочий застрял. |
| WorkerEscaped | Рабочий выбрался. |
| WorkerUnderAttack | Рабочего атакуют. |
| WorkerSafe | Рабочий в безопасности. |
| WorkerInsideTransport | Рабочий находится в транспорте. |
| WorkerExitedTransport | Рабочий вышел из транспорта. |
| WorkerLostPath | Рабочий потерял путь. |
| WorkerPathFound | Рабочий нашёл путь. |
| WorkerDestinationReached | Рабочий достиг цели. |
| WorkerDestinationInvalid | Цель рабочего недействительна. |
| WorkerNoTasks | У рабочего нет задач. |
| WorkerAssigned | Рабочему назначена задача. |
| WorkerUnassigned | Рабочему снята задача. |
| WorkerSearching | Рабочий ищет задачу. |
| WorkerFollowingOrders | Рабочий следует приказам. |
| WorkerDisobeyed | Рабочий не выполнил приказ. |
| WorkerTaskInterrupted | Задача рабочего прервана. |
| WorkerTaskResumed | Задача рабочего возобновлена. |
| WorkerTaskCompleted | Рабочий завершил задачу. |
| WorkerTaskFailed | Рабочий не справился с задачей. |
| WorkerReassigned | Рабочий переназначен на новую задачу. |
| WorkerReachedDropoff | Рабочий достиг точки сброса. |
| WorkerOutOfRange | Рабочий вне радиуса действия. |
| WorkerWithinRange | Рабочий в радиусе действия. |
| WorkerReadyForNextTask | Рабочий готов к следующей задаче. |
| WorkerAwaitingOrders | Рабочий ждёт приказов. |
| WorkerPaused | Рабочий приостановлен. |
| WorkerResumed | Рабочий возобновил работу. |
| WorkerDestroyedBuilding | Рабочий разрушил здание. |
| WorkerConstructedBuilding | Рабочий построил здание. |
| WorkerRepairedBuilding | Рабочий отремонтировал здание. |
| WorkerHarvestedResource | Рабочий собрал ресурс. |
| WorkerDroppedOffResource | Рабочий сдал ресурс. |
| WorkerMovedToTarget | Рабочий переместился к цели. |
| WorkerReturnedToBase | Рабочий вернулся на базу. |
| WorkerFoundObstacle | Рабочий столкнулся с препятствием. |
| WorkerAvoidedObstacle | Рабочий обошёл препятствие. |
| WorkerBlocked | Рабочий заблокирован. |
| WorkerUnblocked | Рабочий больше не заблокирован. |
| WorkerAtWaypoint | Рабочий достиг точки маршрута. |
| WorkerNextWaypoint | Рабочий получил следующую точку маршрута. |
| WorkerFinishedRoute | Рабочий завершил маршрут. |
| WorkerLostTarget | Рабочий потерял цель. |
| WorkerNewTarget | Рабочий получил новую цель. |
| WorkerAttackedEnemy | Рабочий атаковал врага. |
| WorkerKilledEnemy | Рабочий убил врага. |
| WorkerFledFromEnemy | Рабочий убежал от врага. |
| WorkerRecovered | Рабочий восстановился после боя. |
| WorkerReturnedToWork | Рабочий вернулся к работе. |
| WorkerIdleTimeout | Рабочий бездействовал слишком долго. |
| WorkerUnderCommand | Рабочий под контролем. |
| WorkerOutOfControl | Рабочий вне контроля. |
| WorkerObeyed | Рабочий выполнил приказ. |
| WorkerCompletedGoal | Рабочий завершил цель. |
| WorkerGoalInvalid | Цель рабочего недействительна. |
| WorkerGoalUpdated | Цель рабочего обновлена. |
| WorkerFollowingLeader | Рабочий следует за лидером. |
| WorkerLostLeader | Рабочий потерял лидера. |
| WorkerFoundLeader | Рабочий нашёл лидера. |
| WorkerLeaderDead | Лидер рабочего погиб. |
| WorkerInFormation | Рабочий в строю. |
| WorkerOutOfFormation | Рабочий вне строя. |
| WorkerRejoinedFormation | Рабочий вернулся в строй. |
| WorkerFormationBroken | Строй рабочих нарушен. |
| WorkerFormationRebuilt | Строй рабочих восстановлен. |
| WorkerFormationMoving | Строй рабочих движется. |
| WorkerFormationStopped | Строй рабочих остановлен. |
| ConstructedBuildingDestroyed | Триггер: Только что построенное здание уничтожено. |
| ConstructionComplete | Триггер: Строительство завершено. |
| ConstructionProgressing | Триггер: Строительство продолжается. |
| ConversionAborted | Триггер: Процесс конверсии был прерван. |
| ConversionAnimationFinished | Триггер: Анимация конверсии завершена. |
| ConversionTargetStillValid | Триггер: Цель конверсии всё ещё допустима. |
| ConversionUnitCreated | Триггер: Юнит, созданный в результате конверсии, появился. |
| CorpseDecayComplete | Триггер: Труп полностью разложился (удалён). |
| CorpseDisappeared | Триггер: Труп исчез из мира. |
| CreateCorpse | Команда: Создать труп юнита. |
| CreateNewUnit | Команда: Создать новый юнит (например, при спавне или найме). |
| CreateRubble | Команда: Создать обломки (после разрушения здания). |
| DamageAnimationFinished | Триггер: Анимация получения урона завершена. |
| DamageFromUnknownSource | Триггер: Получен урон из неизвестного источника. |
| Dead | Триггер: Юнит мёртв. |
| DeathAnimationFinished | Триггер: Анимация смерти завершена. |
| DeathFrameReached | Триггер: Достигнут кадр смерти (момент удаления). |
| DecrementAmmo | Команда: Уменьшить количество боеприпасов. |
| DefaultAttackTargetStillValid | Триггер: Цель по умолчанию всё ещё активна. |
| DefaultConversionTargetStillValid | Триггер: Цель конверсии по умолчанию всё ещё допустима. |
| DeliverResource | Команда: Доставить собранный ресурс в хранилище. |
| DepositComplete | Триггер: Ресурс успешно сдан. |
| DepositLocationFound | Триггер: Найдено место для сдачи ресурса. |
| DestinationBlocked | Триггер: Путь к цели заблокирован. |
| DestinationReached | Триггер: Цель достигнута. |
| Die | Команда: Умереть (вызов анимации и удаления юнита). |
| DisableGuarding | Команда: Отключить охрану точки. |
| DisableRandomMovement | Команда: Отключить случайное движение. |
| DisembarkFromTransport | Команда: Высадиться из транспорта. |
| DoNothing | Команда: Не делать ничего (задержка, пауза). |
| DropResource | Команда: Бросить текущий ресурс. |
| DropoffBuildingDestroyed | Триггер: Здание для сдачи ресурсов уничтожено. |
| DropoffSiteNoLongerValid | Триггер: Место сдачи ресурсов больше не действительно. |
| Dummy | Заглушка, не выполняющая действий (используется для ИИ). |
| EnemyBuildingInMyLOS | Триггер: В зоне видимости есть вражеское здание. |
| EnemyBuildingSpotted | Триггер: Обнаружено вражеское здание. |
| EnemyDetected | Триггер: Обнаружен враг. |
| EnemyInAttackRange | Триггер: Враг в радиусе атаки. |
| EnemyInLOS | Триггер: Враг в зоне видимости. |
| EnemyInMeleeRange | Триггер: Враг в ближнем бою. |
| EnemyIsTooClose | Триггер: Враг подошёл слишком близко. |
| EnemyOutOfRange | Триггер: Враг вне радиуса атаки. |
| EnemySpotted | Триггер: Враг замечен. |
| EnterTransport | Команда: Сесть в транспорт. |
| EnteredTransport | Триггер: Юнит вошёл в транспорт. |
| EnteringBuilding | Триггер: Юнит входит в здание. |
| EnteringTransport | Триггер: Юнит садится в транспорт. |
| EvacuateBuilding | Команда: Эвакуировать всех из здания. |
| ExecuteAttack | Команда: Выполнить атаку. |
| ExitTransport | Команда: Выйти из транспорта. |
| FacingCompleted | Триггер: Завершён поворот к цели. |
| FleeFromAttacker | Команда: Бежать от атакующего. |
| FleeingCompleted | Триггер: Побег завершён. |
| FormationMoveCompleted | Триггер: Групповое передвижение завершено. |
| FoundBetterTarget | Триггер: Найдена лучшая цель для атаки. |
| FoundDropoffSite | Триггер: Найдено здание для сдачи ресурсов. |
| FoundRepairSite | Триггер: Найдено здание для ремонта. |
| FoundResource | Триггер: Найден ресурс. |
| FoundTarget | Триггер: Найдена цель. |
| GatherAnimationFinished | Триггер: Анимация сбора ресурса завершена. |
| GatherFrameReached | Триггер: Достигнут кадр сбора ресурса. |
| GatherResource | Команда: Начать сбор ресурса. |
| GatheringInterrupted | Триггер: Сбор ресурса прерван. |
| GarrisonFull | Триггер: Здание (гарнизон) переполнено. |
| GenericAnimationFinished | Триггер: Любая анимация завершена. |
| GenericFrameReached | Триггер: Достигнут ключевой кадр анимации. |
| GiveUpSearching | Команда: Прекратить поиск цели или ресурса. |
| GoHome | Команда: Вернуться к базовому зданию. |
| GroupMoveCompleted | Триггер: Групповое перемещение завершено. |
| GuardLocation | Команда: Охранять указанную позицию. |
| GuardTarget | Команда: Охранять цель (юнита/здание). |
| HasAttacker | Триггер: Есть текущий атакующий. |
| HasConversionTarget | Триггер: Есть цель для конверсии. |
| HasEnemyTarget | Триггер: Есть вражеская цель. |
| HasIdleUnit | Триггер: Есть свободные юниты. |
| HasMoveDestination | Триггер: Есть цель для движения. |
| HasRepairTarget | Триггер: Есть цель для ремонта. |
| HasResource | Триггер: Несёт ресурс. |
| HasValidDropoff | Триггер: Есть действительная точка сдачи ресурса. |
| HasWeapon | Триггер: Есть оружие или средство атаки. |
| HealAnimationFinished | Триггер: Анимация лечения завершена. |
| HealTargetDead | Триггер: Цель лечения погибла. |
| HealTargetFullHP | Триггер: Цель лечения полностью восстановлена. |
| HealthBelowThreshold | Триггер: Здоровье ниже заданного уровня. |
| HealthDepleted | Триггер: Здоровье на нуле. |
| HeldPosition | Триггер: Юнит удерживает позицию. |
| HideInFog | Команда: Скрыться в тумане войны. |
| HitByProjectile | Триггер: Попадание снаряда. |
| HoldPosition | Команда: Удерживать позицию. |
| Idle | Триггер: Юнит бездействует. |
| IdleTooLong | Триггер: Юнит слишком долго бездействует. |
| IgnoreTarget | Команда: Игнорировать текущую цель. |
| ImmediateAttack | Команда: Мгновенная атака без подготовки. |
| IncomingProjectile | Триггер: В полёте снаряд направлен в юнита. |
| IncompleteConstruction | Триггер: Строительство ещё не завершено. |
| InRangeToAttack | Триггер: Находится в радиусе атаки. |
| InRangeToRepair | Триггер: В радиусе ремонта. |
| InterceptEnemy | Команда: Перехватить врага. |
| InvalidMoveLocation | Триггер: Неверная точка движения. |
| InventoryFull | Триггер: Инвентарь или вместимость заполнена. |
| IsAlive | Триггер: Юнит жив. |
| IsDead | Триггер: Юнит мёртв. |
| IsFlying | Триггер: Юнит находится в воздухе. |
| IsGrounded | Триггер: Юнит на земле. |
| IsIdle | Триггер: Юнит бездействует. |
| IsInCombat | Триггер: Юнит участвует в бою. |
| IsMoving | Триггер: Юнит находится в движении. |
| IsPatrolling | Триггер: Юнит патрулирует. |
| IsRepairing | Триггер: Юнит выполняет ремонт. |
| IsResourceDepleted | Триггер: Ресурс исчерпан. |
| IsUnderAttack | Триггер: Юнит подвергается атаке. |
| IssueMoveCommand | Команда: Отдать приказ на движение. |
| IssueStopCommand | Команда: Отдать приказ "Стоп". |
| LaunchProjectile | Команда: Запустить снаряд. |
| LaunchUnit | Команда: Выпустить юнит (например, самолёт с авианосца). |
| LeaveTransport | Команда: Покинуть транспорт. |
| LoadComplete | Триггер: Загрузка завершена. |
| LoadTransport | Команда: Загрузиться в транспорт. |
| LoadingInterrupted | Триггер: Загрузка прервана. |
| LocationReached | Триггер: Место назначения достигнуто. |
| LostEnemyTarget | Триггер: Цель потеряна. |
| LowAmmo | Триггер: Боезапас почти исчерпан. |
| LowHealth | Триггер: Низкий уровень здоровья. |
| MainTargetDestroyed | Триггер: Основная цель уничтожена. |
| MakeIdle | Команда: Сделать юнита бездействующим. |
| MeleeAttackFrameReached | Триггер: Достигнут кадр удара ближнего боя. |
| MeleeTargetOutOfRange | Триггер: Цель ближнего боя вышла из радиуса атаки. |
| MissileFired | Триггер: Снаряд выпущен. |
| MissileHitTarget | Триггер: Снаряд достиг цели. |
| MoveAborted | Триггер: Движение отменено. |
| MoveAnimationFinished | Триггер: Анимация движения завершена. |
| MoveCompleted | Триггер: Движение завершено. |
| MoveDestinationBlocked | Триггер: Пункт назначения заблокирован. |
| MoveFrameReached | Триггер: Достигнут ключевой кадр движения. |
| MoveInterrupted | Триггер: Движение прервано. |
| MoveToEnemy | Команда: Двигаться к врагу. |
| MoveToResource | Команда: Двигаться к ресурсу. |
| MoveToTarget | Команда: Двигаться к цели. |
| MovingToRepairTarget | Триггер: Юнит движется к цели ремонта. |
| MovingToResource | Триггер: Юнит движется к ресурсу. |
| MovingToTarget | Триггер: Юнит движется к цели. |
| MovingToTransport | Триггер: Юнит направляется к транспорту. |
| MustReturnResource | Триггер: Необходимо вернуть собранный ресурс. |
| Neutralized | Триггер: Цель нейтрализована (уничтожена или потеряна). |
| NewEnemySpotted | Триггер: Обнаружен новый враг. |
| NewTargetAvailable | Триггер: Появилась новая цель. |
| NoAmmo | Триггер: Отсутствуют боеприпасы. |
| NoAvailableTarget | Триггер: Нет доступных целей. |
| NoConversionTarget | Триггер: Нет цели для конверсии. |
| NoDropoffAvailable | Триггер: Нет доступной точки сдачи ресурса. |
| NoEnemyInRange | Триггер: Нет врагов в радиусе атаки. |
| NoEnemyVisible | Триггер: Нет видимых врагов. |
| NoIdleVillager | Триггер: Нет свободных крестьян. |
| NoPathToTarget | Триггер: Нет пути к цели. |
| NoRepairTarget | Триггер: Нет объекта для ремонта. |
| NoResource | Триггер: Нет ресурса для сбора. |
| NoValidDropoff | Триггер: Нет допустимой точки сдачи ресурса. |
| NoValidTarget | Триггер: Нет подходящей цели. |
| NonCombatUnitUnderAttack | Триггер: Безоружный юнит подвергается атаке. |
| NotEnoughResources | Триггер: Недостаточно ресурсов для выполнения действия. |
| NotFacingTarget | Триггер: Не обращён лицом к цели. |
| NotInRange | Триггер: Не в радиусе действия. |
| NotifyAllies | Команда: Уведомить союзников. |
| ObjectInTheWay | Триггер: На пути есть препятствие. |
| OnGround | Триггер: Находится на земле. |
| OrderCompleted | Триггер: Приказ выполнен. |
| OrderInterrupted | Триггер: Приказ прерван. |
| OutOfAmmo | Триггер: Боезапас на нуле. |
| OutOfRange | Триггер: Цель вне диапазона. |
| OutOfResources | Триггер: Источник ресурсов исчерпан. |
| OwnerChanged | Триггер: Владение объектом изменилось. |
| PathBlocked | Триггер: Путь заблокирован. |
| PathFound | Триггер: Путь найден. |
| PathNotFound | Триггер: Путь не найден. |
| PatrolCompleted | Триггер: Патруль завершён. |
| PatrolInterrupted | Триггер: Патруль прерван. |
| PayForBuilding | Команда: Оплатить строительство. |
| PayForRepair | Команда: Оплатить ремонт. |
| PickNewTarget | Команда: Выбрать новую цель. |
| PickRandomTarget | Команда: Выбрать случайную цель. |
| PickupComplete | Триггер: Подбор предмета завершён. |
| PlacementInvalid | Триггер: Место строительства недопустимо. |
| PlacementValid | Триггер: Место строительства допустимо. |
| PlayerDefeated | Триггер: Игрок побеждён. |
| PlayerVictory | Триггер: Игрок победил. |
| PowerLow | Триггер: Низкий уровень энергии. |
| PowerRestored | Триггер: Энергия восстановлена. |
| PrepareAttack | Команда: Подготовить атаку. |
| ProjectileDestroyed | Триггер: Снаряд уничтожен. |
| ProjectileHit | Триггер: Снаряд попал в цель. |
| PursueEnemy | Команда: Преследовать врага. |
| PursuitAborted | Триггер: Преследование прервано. |
| PursuitCompleted | Триггер: Преследование завершено. |
| RallyPointSet | Триггер: Установлена точка сбора. |
| ReadyToAttack | Триггер: Готов к атаке. |
| ReadyToBuild | Триггер: Готов к строительству. |
| ReadyToCast | Триггер: Готов к применению способности. |
| ReadyToGather | Триггер: Готов к сбору ресурсов. |
| ReadyToMove | Триггер: Готов к движению. |
| ReadyToRepair | Триггер: Готов к ремонту. |
| ReadyToReturnResource | Триггер: Готов вернуть ресурс. |
| ReachedDestination | Триггер: Достигнута точка назначения. |
| ReachedTarget | Триггер: Цель достигнута. |
| ReachedWaypoint | Триггер: Промежуточная точка достигнута. |
| ReadyToUnload | Триггер: Готов к выгрузке. |
| ReceiveAttackOrder | Команда: Получить приказ атаковать. |
| ReceiveBuildOrder | Команда: Получить приказ строить. |
| ReceiveGatherOrder | Команда: Получить приказ собирать ресурсы. |
| ReceiveMoveOrder | Команда: Получить приказ двигаться. |
| ReceiveRepairOrder | Команда: Получить приказ чинить. |
| ReceiveStopOrder | Команда: Получить приказ остановиться. |
| ReceiveTrainOrder | Команда: Получить приказ создать юнита. |
| ReceiveUnloadOrder | Команда: Получить приказ выгрузить юнитов. |
| ReclaimResource | Команда: Возвратить ресурс. |
| ReenterTransport | Команда: Снова войти в транспорт. |
| Refueling | Триггер: Процесс дозаправки. |
| Regroup | Команда: Перегруппироваться. |
| ReinforcementsArrived | Триггер: Подкрепления прибыли. |
| Reloading | Триггер: Перезарядка оружия. |
| ReloadingComplete | Триггер: Перезарядка завершена. |
| RemoveCorpse | Команда: Удалить труп. |
| RepairAnimationFinished | Триггер: Анимация ремонта завершена. |
| RepairCompleted | Триггер: Ремонт завершён. |
| RepairInterrupted | Триггер: Ремонт прерван. |
| RepairTargetDead | Триггер: Цель ремонта уничтожена. |
| ReplaceUnit | Команда: Заменить юнит на другой тип. |
| ReportEnemy | Команда: Сообщить об обнаруженном враге. |
| RequestRepair | Команда: Запросить ремонт. |
| ResetState | Команда: Сбросить текущее состояние ИИ. |
| ResourceDepleted | Триггер: Источник ресурса исчерпан. |
| ResourceDropped | Триггер: Ресурс брошен. |
| ResourceFound | Триггер: Ресурс найден. |
| ResourceLost | Триггер: Ресурс потерян. |
| ResourceReturned | Триггер: Ресурс успешно возвращён. |
| ResourceSiteEmpty | Триггер: Место сбора ресурса пустое. |
| ResupplyComplete | Триггер: Пополнение запасов завершено. |
| Retreat | Команда: Отступить. |
| ReturnResource | Команда: Вернуть собранный ресурс. |
| RevealArea | Команда: Раскрыть участок карты. |
| RevertToIdle | Команда: Вернуться в состояние покоя. |
| ReviveUnit | Команда: Возродить юнит. |
| Scouting | Триггер: Юнит в режиме разведки. |
| SearchForEnemy | Команда: Искать врага. |
| SearchForResource | Команда: Искать ресурс. |
| SelectNewTarget | Команда: Выбрать новую цель. |
| SelfDestruct | Команда: Самоуничтожение. |
| SetAttackTarget | Команда: Назначить цель атаки. |
| SetDropoffSite | Команда: Установить точку сдачи ресурса. |
| SetMoveDestination | Команда: Установить точку движения. |
| SetRepairTarget | Команда: Назначить цель для ремонта. |
| SetRallyPoint | Команда: Установить точку сбора. |
| SetTarget | Команда: Назначить цель. |
| ShieldDepleted | Триггер: Щит исчерпан. |
| ShieldRestored | Триггер: Щит восстановлен. |
| SpawnUnit | Команда: Создать юнит. |
| StartAttack | Команда: Начать атаку. |
| StartBuild | Команда: Начать строительство. |
| StartConversion | Команда: Начать конверсию. |
| StartGather | Команда: Начать сбор ресурса. |
| StartMove | Команда: Начать движение. |
| StartRepair | Команда: Начать ремонт. |
| StartReturn | Команда: Начать возвращение ресурса. |
| StartUnload | Команда: Начать выгрузку. |
| Stop | Команда: Остановиться. |
| StopAttack | Команда: Прекратить атаку. |
| StopBuilding | Команда: Прекратить строительство. |
| StopConversion | Команда: Прекратить конверсию. |
| StopGather | Команда: Прекратить сбор ресурса. |
| StopMove | Команда: Остановить движение. |
| StopRepair | Команда: Прекратить ремонт. |
| StopReturn | Команда: Прекратить возвращение ресурса. |
| StopUnload | Команда: Прекратить выгрузку. |
| StructureComplete | Триггер: Постройка завершена. |
| StructureDestroyed | Триггер: Структура уничтожена. |
| TargetDestroyed | Триггер: Цель уничтожена. |
| TargetLost | Триггер: Цель потеряна. |
| TargetOutOfRange | Триггер: Цель вне радиуса атаки. |
| TargetTooClose | Триггер: Цель слишком близко. |
| TargetTooFar | Триггер: Цель слишком далеко. |
| TaskAborted | Триггер: Задача прервана. |
| TaskCompleted | Триггер: Задача выполнена. |
| TerrainBlocked | Триггер: Местность непроходима. |
| ThreatDetected | Триггер: Обнаружена угроза. |
| TrainingComplete | Триггер: Подготовка юнита завершена. |
| TransportArrived | Триггер: Транспорт прибыл. |
| TransportDestroyed | Триггер: Транспорт уничтожен. |
| TransportEmpty | Триггер: Транспорт пуст. |
| TransportFull | Триггер: Транспорт заполнен. |
| TransportLoaded | Триггер: Транспорт загружен. |
| TransportUnloaded | Триггер: Транспорт разгружен. |
| TurnToFaceTarget | Команда: Повернуться к цели. |
| UnderAttack | Триггер: Юнит подвергается атаке. |
| UnitCreated | Триггер: Юнит создан. |
| UnitDestroyed | Триггер: Юнит уничтожен. |
| UnitIdle | Триггер: Юнит бездействует. |
| UnitInRange | Триггер: Цель в радиусе действия. |
| UnitOutOfRange | Триггер: Цель вне радиуса. |
| UnitSelected | Триггер: Юнит выбран игроком. |
| UnloadComplete | Триггер: Выгрузка завершена. |
| UnloadTransport | Команда: Выгрузить транспорт. |
| UpgradeComplete | Триггер: Улучшение завершено. |
| UpgradeStarted | Триггер: Улучшение начато. |
| UseAbility | Команда: Использовать способность. |
| Wait | Команда: Подождать указанное время. |
| WaitForAnimation | Команда: Ожидать завершения анимации. |
| WaitForCondition | Команда: Ожидать выполнения условия. |
| WaitForSignal | Команда: Ожидать сигнала или события. |
| Wander | Команда: Случайное блуждание. |
| WeaponCooldownComplete | Триггер: Оружие готово к повторному использованию. |
| WeaponFired | Триггер: Оружие произведено выстрел. |
| WeaponReloading | Триггер: Оружие в процессе перезарядки. |
| WorkerIdle | Триггер: Рабочий бездействует. |
| Wounded | Триггер: Юнит ранен. |
| ZoneEntered | Триггер: Юнит вошёл в зону. |
| ZoneExited | Триггер: Юнит покинул зону. |


