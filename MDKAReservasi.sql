USE [MDKAReservasi]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Ruangan](
	[Ruangan_PK] [int] IDENTITY(1,1) NOT NULL,
	[NamaRuangan] [nvarchar](200) NULL,
	[Lantai] [int] NULL,
	[DayaTampung] [int] NULL,
	[CreatedBy] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](50) NULL,
	[UpdatedDate] [datetime] NULL,
	[Status_FK] [int] NULL,
 CONSTRAINT [PK_tblM_Ruangan] PRIMARY KEY CLUSTERED 
(
	[Ruangan_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblM_Status](
	[Status_PK] [int] IDENTITY(1,1) NOT NULL,
	[NamaStatus] [nvarchar](200) NULL,
	[CreatedBy] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](50) NULL,
	[UpdatedDate] [datetime] NULL,
 CONSTRAINT [PK_tblM_Status] PRIMARY KEY CLUSTERED 
(
	[Status_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblT_Reservasi](
	[Reservasi_PK] [int] IDENTITY(1,1) NOT NULL,
	[Ruangan_FK] [int] NULL,
	[SubjectReservasi] [nvarchar](max) NULL,
	[TanggalReservasi] [date] NULL,
	[JamMulai] [time](7) NULL,
	[JamSelesai] [time](7) NULL,
	[CreatedBy] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedBy] [nvarchar](50) NULL,
	[UpdatedDate] [datetime] NULL,
 CONSTRAINT [PK_tblT_Reservasi] PRIMARY KEY CLUSTERED 
(
	[Reservasi_PK] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

SET IDENTITY_INSERT [dbo].[tblM_Status] ON 
INSERT [dbo].[tblM_Status] ([Status_PK], [NamaStatus], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate]) VALUES (1, N'Booked', N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[tblM_Status] ([Status_PK], [NamaStatus], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate]) VALUES (2, N'Vacant', N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[tblM_Status] ([Status_PK], [NamaStatus], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate]) VALUES (3, N'Renovasi', N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[tblM_Status] OFF

SET IDENTITY_INSERT [dbo].[tblM_Ruangan] ON 
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (1, N'101', 1, 200, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (2, N'201', 2, 25, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 3)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (3, N'202', 2, 50, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (4, N'203', 2, 25, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (5, N'204', 2, 100, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 3)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (6, N'301', 3, 50, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (7, N'302', 3, 50, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (8, N'303', 3, 50, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (9, N'304', 3, 50, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (10, N'401', 4, 50, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 3)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (11, N'402', 4, 50, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 3)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (12, N'403', 4, 100, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 2)
INSERT [dbo].[tblM_Ruangan] ([Ruangan_PK], [NamaRuangan], [Lantai], [DayaTampung], [CreatedBy], [CreatedDate], [UpdatedBy], [UpdatedDate], [Status_FK]) VALUES (13, N'501', 5, 100, N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), N'SYSTEM', CAST(N'2019-01-01T00:00:00.000' AS DateTime), 3)
SET IDENTITY_INSERT [dbo].[tblM_Ruangan] OFF

